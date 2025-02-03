import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { loginDetailsList } from 'src/app/shared/models/master';
import { MasterService } from '../service/master.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent {
  loginDetailsList: loginDetailsList[] = [];

  displayedColumns: string[] = ['select','userName', 'email', 'phoneNumber', 'fullName', 'empRegId','isActive','actions'];
  dataSource: MatTableDataSource<loginDetailsList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loginForm: any;

  constructor(private masterService: MasterService) {
    this.dataSource = new MatTableDataSource<loginDetailsList>();
  }

  ngAfterViewInit() {
    this.getLoginDetailsList();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

//filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
///////For Check_Box////////////
 selection = new SelectionModel<loginDetailsList>(true, []);

 isAllSelected() {
   const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.data.length;
   return numSelected === numRows;
 }

 toggleAllRows() {
   if (this.isAllSelected()) {
     this.selection.clear();
     return;
   }
   this.selection.select(...this.dataSource.data);
 }

 checkboxLabel(row?: loginDetailsList): string {
   if (!row) {
     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
   }
   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
}
getLoginDetailsList() {
  this.masterService.getListLogin().subscribe(
    (res) => {
      this.loginDetailsList = res;
      this.dataSource.data = this.loginDetailsList;
    },
    (err: Error) => {
      console.error('Error fetching login details', err);
      alert('Failed to load login details');
    }
  );
}

}
