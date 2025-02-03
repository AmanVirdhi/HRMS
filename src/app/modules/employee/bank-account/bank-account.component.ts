import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';
import { bankList, empbankList } from 'src/app/shared/models/employeelist';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  validationForm!: FormGroup;
  showForm: boolean = false;

 // bankList: Array<bankList> = [];
  bankAccountId: string | null = null;

  constructor(private employeeService: EmployeeServiceService, private toastr: ToastrService) {
    this.validationForm = new FormGroup({
      BankName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      IfscCode: new FormControl(null, { validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[A-Za-z0-9]+$")], updateOn: 'change' }),
      AccountNo: new FormControl(null, { validators: [Validators.required, Validators.minLength(9),Validators.maxLength(18), Validators.pattern("^[0-9]{9,18}$")], updateOn:'change'}),
      // IfscCode: new FormControl(null, { validators: [Validators.required, Validators.maxLength(11), Validators.pattern("^[A-Za-z0-9]+$")], updateOn: 'change' }),
      // AccountNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(17), Validators.pattern("^[0-9]+$")], updateOn: 'change' }),
      AccountHolderName: new FormControl(null, { validators: [Validators.required, Validators.maxLength(35), Validators.pattern("^[A-Za-z. ]+$")], updateOn: 'change' }),
      BranchName: new FormControl(null, { validators: [Validators.required, Validators.maxLength(25), Validators.pattern("^[A-Za-z ]+$")], updateOn: 'change' }),
      BankLocation: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Attachment: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),

    });
  }

  get BankName(): AbstractControl {
    return this.validationForm.get('BankName')!;
  }
  get IfscCode(): AbstractControl {
    return this.validationForm.get('IfscCode')!;
  }
  get AccountNo(): AbstractControl {
    return this.validationForm.get('AccountNo')!;
  }
  get AccountHolderName(): AbstractControl {
    return this.validationForm.get('AccountHolderName')!;
  }
  get BranchName(): AbstractControl {
    return this.validationForm.get('BranchName')!;
  }
  get BankLocation(): AbstractControl {
    return this.validationForm.get('BankLocation')!;
  }
  get Attachment(): AbstractControl {
    return this.validationForm.get('Attachment')!;
  }

  onSubmit(validationForm: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (validationForm.valid) {
      this.saveBankDetails();
    } else {
      // Display specific error messages for each field
  // Bank Name
  if (validationForm.get('BankName')?.errors?.['required']) {
    this.toastr.error('Bank Name is required.');
  }

  // Account No
  else if (validationForm.get('AccountNo')?.errors?.['required']) {
    this.toastr.error('Account Number is required.');
  }
  // Account Holder Name
  else if (validationForm.get('AccountHolderName')?.errors?.['required']) {
    this.toastr.error('Account Holder Name is required.');
  }

  // Branch Name
  else if (validationForm.get('BranchName')?.errors?.['required']) {
    this.toastr.error('Branch Name is required.');
  }

  // Bank Location
  else if (validationForm.get('BankLocation')?.errors?.['required']) {
    this.toastr.error('Bank Location is required.');
  }
  // IFSC Code
  else if (validationForm.get('IfscCode')?.errors?.['required']) {
    this.toastr.error('IFSC Code is required.');
  }
  // Attachment
  else if (validationForm.get('Attachment')?.errors?.['required']) {
    this.toastr.error('Attachment is required.');
 }
    }
  }
  

  ngOnInit(): void {
    this.getBankList();
  }

  saveBankDetails() { 
    const bankDetails = {
      isActive: true,
      createdOn: new Date().toISOString(),
      createdBy: "",
      updatedBy: "",
      updatedOn: new Date().toISOString(),
      bankName: this.validationForm.value.BankName.trim(),
      ifscCode: this.validationForm.value.IfscCode.trim(),
      accountNo: this.validationForm.value.AccountNo.trim(),
      accountHolderName: this.validationForm.value.AccountHolderName.trim(),
      branchName: this.validationForm.value.BranchName.trim(),
      bankLocation: this.validationForm.value.BankLocation.trim(),
      attachment: this.validationForm.value.Attachment.trim(),
    };
    this.employeeService.saveEmpBankDetail(bankDetails).subscribe(
      () => {
        this.toastr.success('Bank added');
        this.validationForm.reset()

      },
      (error) => {
        console.error(error);
        this.toastr.error('Something went wrong while saving the Bank details');
      }
    );
  }

   //#region added by amandeep
  //Bank Dropdown/
  bankList: any[] = [];
  getBankList() {
    this.employeeService.getAllEployeeBank().subscribe(options => {
      this.bankList = options;
    });
  }
   //#endregion
    ////////////////////////////////////////////

    isNumberKey(event: KeyboardEvent): boolean {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      }
      return true;
    } 
    isAlphanumericKey(event: KeyboardEvent): boolean {
      const charCode = event.which ? event.which : event.keyCode;
      if (!(charCode >= 48 && charCode <= 57) &&  // Numeric (0-9)
          !(charCode >= 65 && charCode <= 90) &&  // Upper alpha (A-Z)
          !(charCode >= 97 && charCode <= 122)) { // Lower alpha (a-z)
        event.preventDefault();
        return false;
      }
      return true;
    }
}