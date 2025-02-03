import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EmployeeServiceService } from './../../employee/employee-service/employee-service.service';
import { employeeList } from 'src/app/shared/models/employeelist';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  position: number; // Add this line
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements AfterViewInit {
  displayedColumns: string[] = ['select', 'profileImage','fullName', 'gender', 'bloodGroup', 'dob', 'maritalStatus', 'reliegion', 'fatherorHusbandName', 'dateofMarriage', 'mobileNo', 'email','isActive'];
  dataSource: MatTableDataSource<PeriodicElement>;
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeApiService: EmployeeServiceService, private router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   this.getProductCategoryList();
   //added bu Aman on 24-07-2024
   this.getProjectOptions();
   this.getDepartmentOptions();
   this.getManagerOptions();
    // this.getEmployeeList();
    // this.empRegId = this.getEmpRegId(); //added by Aman for current Employee Id
  }

  getProductCategoryList() {
    this.employeeApiService.getEmpWithId().subscribe(res => {
      this.dataSource.data = res; // Assign data to dataSource
    });
  }

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
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  navigateToProfile(empId: string) {
    this.router.navigate(['../main/employee/profile'], { queryParams: { empid:empId}});
}

//#region  project dropdown in employee List added by Amandeep Virdhi : 24/07/2024
filteredProjectOptions: any[] = [];
options: any[] = [];
selectedOption!: string;
searchValue: string = '';

getProjectOptions() {
  this.employeeApiService.getProjectOptions().subscribe(options => {
    this.options = options;
    this.filteredProjectOptions = options;
  });
}

private _filter(value: string) {
  const filterValue = value.toLowerCase();
  return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
}

filterOptions(value: string) {
  this.searchValue = value;
  this.filteredProjectOptions = this._filter(value);
}

clearSearch() {
  this.searchValue = ''; // Clear search term
  this.filteredProjectOptions = this.options;
}
//for department dropdown
filteredDepartmentOptions: any[] = [];
optionsDepartment: any[] = [];
selectedDepartmentOption!: string;
searchDepartmentValue: string = '';

filterDepartmentOptions(value: string) {
  this.searchDepartmentValue = value;
  this.filteredDepartmentOptions = this.optionsDepartment.filter(option =>
    option.name.toLowerCase().includes(value.toLowerCase())
  );
}

clearDepartmentSearch() {
  this.searchDepartmentValue = '';
  this.filteredDepartmentOptions = this.optionsDepartment;
}

getDepartmentOptions() {
  this.employeeApiService.getDepartmentOptions().subscribe(options => {
    this.optionsDepartment = options;
    this.filteredDepartmentOptions = options;
  });
}
//for Manager Dropdown
filteredManagerOptions: any[] = [];
optionsManager: any[] = [];
selectedManagerOption!: string;
searchManagerValue: string = '';

filterManagerOptions(value: string) {
  this.searchManagerValue = value;
  this.filteredManagerOptions = this.optionsManager.filter(option =>
    option.name.toLowerCase().includes(value.toLowerCase())
  );
}

clearManagerSearch() {
  this.searchManagerValue = '';
  this.filteredManagerOptions = this.optionsManager;
}

getManagerOptions() {
  this.employeeApiService.getManagerOptions().subscribe(options => {
    this.optionsManager = options;
    this.filteredManagerOptions = options;
  });
}
//#endregion
 // Added By Amandeep virdhi om 25-07-2024 for not stuck on filter
 formGroup!: FormGroup;
 ngOnInit() {
   this.formGroup = new FormGroup({
     project: new FormControl(),
     department: new FormControl(),
     manager: new FormControl()
   });
 }
//#region added by Amandeep Virdhi on 18-07-2024 for current user
//get user id 
// empRegId: any
// getEmpRegId(): string | null {
//   const token = localStorage.getItem('token');
//   if (token) {
//     const tokenPayload = JSON.parse(atob(token.split('.')[1]));
//     return tokenPayload['empRegId'] || null;
//   }
//   return null;
// }

// getEmployeeList() {
//   this.employeeApiService.getEmpWithId().subscribe(
//     (res) => {
//       const empRegId = this.getEmpRegId();
//       let filteredData = res;
      
//       if (empRegId) {
//         filteredData = res.filter(item => item.empPersDtlId === parseInt(empRegId));
//       }
//       this.dataSource.data = filteredData; // Assign filtered data to dataSource
//     },
//     (error) => {
//       // Handle error here
//     }
//   );
// }
//#endregion

//#region added by Amandeep on 22-07-2024 for profile image
showQuestion: boolean = false;
currentModalImgUrl: string = '';
toggleQuestion(imageUrl: string) {
  this.showQuestion = !this.showQuestion;
  this.currentModalImgUrl = imageUrl;
}
closePopup() {
  this.showQuestion = false;
}
preventClose(event: MouseEvent) {
  event.stopPropagation();
}

getImageURL(imageFileName: string): string {
  // Assuming that your images are stored in a specific directory (e.g., 'assets/category-icons/')
  return `assets/img/${imageFileName}`;
}
//endregion

}