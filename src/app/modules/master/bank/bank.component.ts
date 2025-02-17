import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { bankList } from 'src/app/shared/models/master';
import { MasterService } from '../service/master.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
}) 
export class BankComponent implements AfterViewInit {

  createdOn: string = '';
  validationForm!: FormGroup;
  bankId!: string;
  bankName: string = '';
  bankList: bankList[] = [];
  displayedColumns: string[] = ['select','bankId', 'bankName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<bankList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private bankService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<bankList>();
    this.validationForm = new FormGroup({
      banName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });
  }
  get banName(): AbstractControl {
    return this.validationForm.get('banName')!;
  }
  
  onSubmit(form: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (form.valid) {
      this.savebankdata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  savebankdata() {
    const currentDate = new Date().toISOString();
    const bankDetails = {
      bankName: this.bankName.trim(),
      createdBy: "Ganesh",
      isActive: true,
      createdOn: currentDate
    };
    this.bankService.saveBankDetail(bankDetails).subscribe(
      () => {
        this.getBankList();
        this.toastr.success("Bank save successfully");
        this.showTabs = false;
        this.bankName = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Bank data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Bank details");
        }
      }
    );
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.bankName = '';
    this.validationForm.reset();
  }
  closeFunction() {
    this.showEdits = !this.showEdits;
    this.bankName = '';
    this.validationForm.reset();
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////*Edit Popup*//////////////

  showEdits: boolean = false;
  toggleEdit(deptId: any) {
    this.showEdits = !this.showEdits;
    let obj: any = {}
    obj = this.bankList.find((ele) => { return ele.bankId == parseInt(deptId) });
    this.bankName = obj.bankName.trim();
    this.bankId = obj.bankId;
    this.createdOn = obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  
  editbankdata(): void {
    const currentDate = new Date().toISOString();
    const bankDetails = {
      bankName: this.bankName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      isActive: true,
      updatedOn: currentDate,
      createdOn: this.createdOn
    };
    this.bankService.editBankDetail(bankDetails, this.bankId).subscribe(
      () => {
        this.getBankList();
        this.toastr.success("Bank Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Bank data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Bank details");
        }        }
    );
  }

  /////////////////////////////////////////////////////////////////

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getBankList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getBankList() {
    this.bankService.getBankWithId().subscribe(res => {
      this.bankList = res;
      this.dataSource.data = this.bankList;
  });
 }
 ///////For Check_Box////////////
 selection = new SelectionModel<bankList>(true, []);

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

 checkboxLabel(row?: bankList): string {
   if (!row) {
     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
   }
   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.bankId+1}`;
}

 }
