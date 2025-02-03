import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EsicList } from 'src/app/shared/models/employeelist';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-esic',
  templateUrl: './esic.component.html',
  styleUrls: ['./esic.component.scss']
})
export class EsicComponent {

  esicForm: FormGroup;
  EsicList: Array<EsicList> = [];
  displayedColumns: string[] = ['select', 'esicId', 'empRegId', 'empName', 'esicContribution', 'esicNo', 'employeeEsicRate', 'additionalRate', 'totalRate', 'remarks', 'createdOn', 'createdBy', 'updatedBy', 'updatedOn', 'isActive', 'action'];

  dataSource: MatTableDataSource<EsicList>;
  selection = new SelectionModel<EsicList>(true, []);

  constructor(private mainService: EmployeeServiceService, private fb: FormBuilder, private cdr: ChangeDetectorRef, private http: HttpClient, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<EsicList>([]);
    this.esicForm = new FormGroup({
      // empRegId: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      empName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      esicContribution: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      esicNo: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      employeeEsicRate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      insuranceBy: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      additionalRate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      totalRate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      remarks: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getEsicList();
    this.getEmployeeOptions();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
  }
  getEsicList() {
    this.mainService.getEsicWithId().subscribe((res: EsicList[]) => {
      this.EsicList = res;
      this.dataSource.data = this.EsicList;
    });
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.esicForm.reset();
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
  checkboxLabel(row?: EsicList): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.esicId + 1}`;
  }
  /// Add category Post 
  empName!: string;
  medicalNo!: string;
  insuranceBy!: string;
  esicContribution!: string;
  esicNo!: string;
  employeeEsicRate!: string;
  additionalRate!: string;
  totalRate!: string;
  
  onSubmit(esicForm: FormGroup) {
    esicForm.markAllAsTouched()
    if (esicForm.valid) {
      const currentDate = new Date().toISOString();
      let EsicDetails = {
        empName: esicForm.value.empName.trim(),
        esicContribution: esicForm.value.esicContribution.trim(),
        esicNo: esicForm.value.esicNo.trim(),
        employeeEsicRate: esicForm.value.employeeEsicRate.trim(),
        additionalRate: esicForm.value.additionalRate.trim(),
        totalRate: esicForm.value.totalRate.trim(),
        insuranceBy: esicForm.value.insuranceBy.trim(),
        remarks: esicForm.value.remarks.trim(),
        isActive: true,
        validFrom: currentDate,
        validTo: currentDate,
        createdOn: new Date().toISOString(),
        createdBy: "",
        updatedBy: "",
        updatedOn: new Date().toISOString(),
      }
      this.mainService.saveEsic(EsicDetails).subscribe(() => {
        this.getEsicList();
        this.toastr.success("ESIC data add Successfully");
        this.showTabs = false;
        this.empName = '';
        this.esicContribution = '';
        this.esicNo = '';
        this.employeeEsicRate = '';
        this.additionalRate = '';
        this.totalRate = '';

      },
        (error) => {
          console.error(error);
          if (error.status === 500) {
            this.toastr.error("Duplicate ESIC data. Please enter unique data.");
          } else {
            this.toastr.error("Something went wrong while saving the ESIC details");
          }
        }
      );
    }
    else {
      if (!esicForm.get('')?.value) {
        this.toastr.error("Please fill all values")
      }
    }
  }

  EmployeeOptions: any[] = [];
  getEmployeeOptions() {
    this.mainService.getEmployeeWithId().subscribe(options => {
      this.EmployeeOptions = options;
    });
  }
}

