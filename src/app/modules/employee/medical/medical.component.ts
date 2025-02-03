import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MedicalList } from 'src/app/shared/models/employeelist';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.scss']
})
export class MedicalComponent {
  medicalForm: FormGroup;

  MedicalList: Array<MedicalList> = [];
  displayedColumns: string[] = ['select', 'medicalId', 'empRegId', 'empName', 'medicalNo', 'validFrom', 'validTo', 'insuranceBy', 'remarks', 'createdOn', 'createdBy', 'updatedBy', 'updatedOn', 'isActive', 'action'];

  dataSource: MatTableDataSource<MedicalList>;
  selection = new SelectionModel<MedicalList>(true, []);

  constructor(private mainService: EmployeeServiceService, private fb: FormBuilder, private cdr: ChangeDetectorRef, private http: HttpClient, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<MedicalList>([]);
    this.medicalForm = new FormGroup({
      empName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      medicalNo: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      insuranceBy: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      remarks: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.getEmployeeOptions();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getMedicalList();
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.medicalForm.reset();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  checkboxLabel(row?: MedicalList): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.medicalId + 1}`;
  }
  /// Add category Post 
  empName!: string;
  medicalNo!: string;
  insuranceBy!: string;
  remarks!: string;
  validFrom: any;
  createdOn: any;
  medicalId!: string;

  onSubmit(medicalForm: FormGroup) {
    medicalForm.markAllAsTouched()
    if (medicalForm.valid) {
      const currentDate = new Date().toISOString();
      let MedicalDetails = {
        empRegId: parseInt(medicalForm.value.empRegId),
        empName: medicalForm.value.empName,
        medicalNo: medicalForm.value.medicalNo.trim(),
        insuranceBy: medicalForm.value.insuranceBy.trim(),
        remarks: medicalForm.value.remarks.trim(),
        validFrom: currentDate,
        validTo: currentDate,
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "",
        updatedBy: "",
        updatedOn: new Date().toISOString(),
        medicalId: 0,
      }
      this.mainService.saveMedical(MedicalDetails).subscribe(() => {
        this.getMedicalList();
        this.toastr.success("Medical data add Successfully");
        this.showTabs = false;
        this.empName = '';
        this.medicalNo = '';
        this.insuranceBy = '';
        this.remarks = '';
      },
        (error) => {
          console.error(error);
          if (error.status === 500) {
            this.toastr.error("Duplicate Medical data. Please enter unique data.");
          } else {
            this.toastr.error("Something went wrong while saving the Medical details");
          }
        }
      );
    }
    else {
      if (!medicalForm.get('')?.value) {
        this.toastr.error("Please fill all values")
      }
    }
  }
  saveMedicalRecord(medicalForm: FormGroup) {
    if (medicalForm.valid) {
      const medicalDetails = this.buildMedicalDetails(medicalForm);
      this.mainService.saveMedical(medicalDetails).subscribe(() => {
        this.getMedicalList();
        this.toastr.success("Medical data added successfully");
        this.showTabs = false;
        this.resetForm();
      }, this.handleError);
    } else {
      this.toastr.error("Please fill all required fields.");
    }
  }

  buildMedicalDetails(medicalForm: FormGroup) {
    const currentDate = new Date().toISOString();
    return {
      empRegId: parseInt(medicalForm.value.empRegId),
      empName: medicalForm.value.empName,
      medicalNo: medicalForm.value.medicalNo.trim(),
      insuranceBy: medicalForm.value.insuranceBy.trim(),
      remarks: medicalForm.value.remarks.trim(),
      validFrom: currentDate,
      validTo: currentDate,
      isActive: true,
      createdOn: currentDate,
      createdBy: "",
      updatedBy: "",
      updatedOn: currentDate,
      medicalId: 0,
    };
  }

  resetForm() {
    this.empName = '';
    this.medicalNo = '';
    this.insuranceBy = '';
    this.remarks = '';
  }

  handleError(error) {
    console.error(error);
    if (error.status === 500) {
      this.toastr.error("Duplicate Medical data. Please enter unique data.");
    } else {
      this.toastr.error("Something went wrong while saving the Medical details.");
    }
  }
  showEdits!: boolean;
  toggleEdit(id: any) {
    this.showEdits = !this.showEdits;
    let obj: any = {}
    obj = this.MedicalList.find((ele: { medicalId: number; }) => {
      return ele.medicalId == parseInt(id)
    });
    this.medicalNo = obj.medicalNo.trim();
    this.remarks = obj.remarks.trim();
    this.insuranceBy = obj.insuranceBy.trim();
  }
  editMedicaldata(): void {
    const currentDate = new Date().toISOString();
    const MedicalDetails = {
      medicalNo: this.medicalNo,
      insuranceBy: this.insuranceBy,
      validFrom: currentDate,
      validTo: currentDate,
      createdBy: 'string',
      updatedBy: 'string',
      updatedOn: currentDate,
      isActive: true,
      remarks: 'string',
      createdOn: this.createdOn,
    };
    this.mainService.editMedicalDetails(MedicalDetails, this.medicalId).subscribe(
      () => {
        this.getMedicalList();
        this.toastr.success("Medical add Successfully");
        this.showEdits = false;
        this.medicalNo = '';
        this.insuranceBy = '';
      },
      (error) => {
        console.log(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Mediacl data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Medical details");
        }
      }
    );
  }
  closeFunction() {
    this.showEdits = !this.showEdits;
    this.medicalNo = '';
    this.insuranceBy = '';
    this.medicalForm.reset();
  }

  EmployeeOptions: any[] = [];
  getEmployeeOptions() {
    this.mainService.getEmployeeWithId().subscribe(options => {
      this.EmployeeOptions = options;
    });
  }
  getMedicalList() {
    this.mainService.getMedicalWithId().subscribe((res: MedicalList[]) => {
      this.MedicalList = res;
      this.dataSource.data = this.MedicalList;
    });
  }
}
