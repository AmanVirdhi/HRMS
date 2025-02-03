import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EpfList } from 'src/app/shared/models/employeelist';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-epf',
  templateUrl: './epf.component.html',
  styleUrls: ['./epf.component.scss']
})
export class EpfComponent {
  // editForm: FormGroup;
  epfForm: FormGroup;
  EpfList: Array<EpfList> = [];
  displayedColumns: string[] = ['select', 'epfId', 'empRegId', 'empName', 'uan', 'epfContribution', 'epfNumber', 'epfRate', 'additionalRate', 'totalRate', 'remarks', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'action'];
  dataSource: MatTableDataSource<EpfList>;
  selection = new SelectionModel<EpfList>(true, []);

  constructor(private mainService: EmployeeServiceService, private fb: FormBuilder, private cdr: ChangeDetectorRef, private toastr: ToastrService) {

    this.dataSource = new MatTableDataSource<EpfList>();
    this.epfForm = new FormGroup({
      uan: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      remarks: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      epfNo: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      epfContribution: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      employeePFRate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      additionalRate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      empName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      totalRate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });

  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  variationOptions: any[] = [];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getEpfList();
    this.getEmployeeOptions();
  }

  getEpfList() {
    this.mainService.getEpfWithId().subscribe((res: any) => {
      this.EpfList = res;
      this.dataSource.data = this.EpfList;
    });
  }
  epfId!: string;
  showEdits: boolean = false;
  showTabs: boolean = false;
  epfNo!: string;
  selectedFile: File | null = null;
  createdOn: string = '';
  epfContribution!: string;
  empRegId!: string;
  uan!: string;
  employeePFRate!: string;
  additionalRate!: string;
  totalRate!: string;
  empName!: string;

  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.epfContribution = '';
    this.epfNo = '';
    this.uan = '';
    this.empName = '';
    this.employeePFRate = '';
    this.additionalRate = '';
    this.totalRate = '';
    // this.empRegId='';
    this.epfForm.reset();
  }
  /// Add Brand Post 
  onSubmit(epfForm: FormGroup) {
    epfForm.markAllAsTouched()
    if (epfForm.valid) {
      const currentDate = new Date().toISOString();
      let epfDetails = {
        // "empRegId": epfForm.value.empRegId.trim(),
        "uan": epfForm.value.uan.trim(),
        "epfNo": epfForm.value.epfNo.trim(),
        "epfContribution": epfForm.value.epfContribution.trim(),
        "employeePFRate": epfForm.value.employeePFRate.trim(),
        "additionalRate": epfForm.value.additionalRate.trim(),
        "totalRate": epfForm.value.totalRate.trim(),
        "empName": epfForm.value.empName.trim(),
        "remarks": epfForm.value.remarks.trim(),
        "isActive": true,
        "createdBy": 'string',
        "createdOn": currentDate,
      }
      this.mainService.saveEpfDetail(epfDetails).subscribe(() => {
        this.getEpfList();
        this.toastr.success("EPF add Successfully");
        this.epfForm.reset();
      },
        (error) => {
          console.error(error);
          if (error.status === 500) {
             this.toastr.error("Duplicate EPF data. Please enter unique data.");
          } else {
             this.toastr.error("Something went wrong while saving the EPF details");
          }
        }
      );
    }
    else {
      if (!epfForm.get('')?.value) {
        this.toastr.error("Please fill all values")
      }
    }
  }

  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  // Edit Brand POP-UP ////
  remarks !: string;
  toggleEdit(id: any) {
    this.showEdits = !this.showEdits;
    let obj: any = {}
    obj = this.EpfList.find((ele) => {
      return ele.epfId == parseInt(id)
    });
    this.empRegId = obj.empRegId.trim();
    this.uan = obj.una.trim();
    this.epfContribution = obj.epfContribution.trim();
    this.epfNo = obj.epfContribution.trim();
    this.employeePFRate = obj.epfRate.trim();
    this.additionalRate = obj.additionalRate.trim();
    this.remarks = obj.remarks.trim();
    this.epfId = obj.epfId;
    this.createdOn = obj.createdOn;
  }

  editepfdata(): void {
    const currentDate = new Date().toISOString();
    const epfDetails = {
      epfContribution: this.epfContribution,
      empRegId: this.empRegId,
      uan: this.uan,
      epfNumber: this.epfNo,
      createdBy: 'string',
      updatedBy: 'string',
      updatedOn: currentDate,
      isActive: true,
      remarks: 'string',
      createdOn: this.createdOn,
    };
    this.mainService.editepfdata(epfDetails, this.epfId).subscribe(
      () => {
        this.getEpfList();
        this.toastr.success("EPF Updated");
        this.showTabs = false;
        this.empRegId = '';
        this.uan = '';
        this.epfContribution = '';
        this.epfNo = '';
        this.employeePFRate = '';
        this.additionalRate = '';
      },
      (error) => {
        console.log(error);
        if (error.status === 500) {
          this.toastr.success("Duplicate EPF data. Please enter unique data.")
        } else {
          this.toastr.success("Something went wrong. Please try again.")
        }
      }
    );
  }

  closeFunction() {
    this.showEdits = !this.showEdits;
    this.empRegId = '';
    this.uan = '';
    this.epfContribution = '';
    this.epfNo = '';
    this.employeePFRate = '';
    this.additionalRate = '';
    this.epfForm.reset();
  }
  closePopup() {
    this.showQuestion = false;
  }
  showQuestion: boolean = false;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EpfList): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.epfId + 1}`;
  }
  EmployeeOptions: any[] = [];
  getEmployeeOptions() {
    this.mainService.getEmployeeWithId().subscribe(options => {
      this.EmployeeOptions = options;
    });
  }
}

