import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityServiceService } from 'src/app/shared/service/Utility/utility-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  //#region image added by saubhag on 060 May 2024 
  selectedFile1: File | null = null;
  filesave1: any;
  onFileSelected1(event: any) {
    this.selectedFile1 = event.target.files[0];
  }

  getObjectURL1(file: File): string {
    this.getImageURL1(file.name);
    return URL.createObjectURL(file);
  }

  getImageURL1(imageFileName: string) {
    this.filesave1 = `../../../../assets/attachment/empidentity/${imageFileName}`;
  }

  selectedFile2: File | null = null;
  filesave2: any;
  onFileSelected2(event: any) {
    this.selectedFile2 = event.target.files[0];
  }

  getObjectURL2(file: File): string {
    this.getImageURL2(file.name);
    return URL.createObjectURL(file);
  }

  getImageURL2(imageFileName: string) {
    this.filesave2 = `../../../../assets/attachment/empidentity/${imageFileName}`;
  }


  selectedFile3: File | null = null;
  filesave3: any;
  onFileSelected3(event: any) {
    this.selectedFile3 = event.target.files[0];
  }

  getObjectURL3(file: File): string {
    this.getImageURL3(file.name);
    return URL.createObjectURL(file);
  }

  getImageURL3(imageFileName: string) {
    this.filesave3 = `../../../../assets/attachment/empidentity/${imageFileName}`;
  }


  selectedFile4: File | null = null;
  filesave4: any;
  onFileSelected4(event: any) {
    this.selectedFile4 = event.target.files[0];
  }

  getObjectURL4(file: File): string {
    this.getImageURL4(file.name);
    return URL.createObjectURL(file);
  }

  getImageURL4(imageFileName: string) {
    this.filesave4 = `../../../../assets/attachment/empidentity/${imageFileName}`;
  }
  ///



  selectedFile_job: File | null = null;
  filesave_job: any;
  onFileSelected_job(event: any) {
    this.selectedFile_job = event.target.files[0];
  }

  getObjectURL_job(file: File): string {
    this.getImageURL_job(file.name);
    return URL.createObjectURL(file);
  }

  getImageURL_job(imageFileName: string) {
    this.filesave_job = `../../../../assets/attachment/empidentity/${imageFileName}`;
  }
  //#endregion
  initializeForm(): void {
    // Initialize the form with default values
    console.log("lele", this.education);
    if (this.showTabs) {
      this.EmployeeForm = new FormGroup({
        fullName: new FormControl(this.personal.fullName, { validators: Validators.required, updateOn: 'submit' }),
        gender: new FormControl(this.personal.gender, { validators: Validators.required, updateOn: 'submit' }),
        fatherorHusbandName: new FormControl(this.personal.fatherorHusbandName, { validators: Validators.required, updateOn: 'submit' }),
        mobileNo: new FormControl(this.personal.mobileNo, { validators: Validators.required, updateOn: 'submit' }),
        bloodGroup: new FormControl(this.personal.bloodGroup, { validators: Validators.required, updateOn: 'submit' }),
        reliegion: new FormControl(this.personal.reliegion, { validators: Validators.required, updateOn: 'submit' }),
        dob: new FormControl(this.formatDate(this.personal.dob), { validators: Validators.required, updateOn: 'submit' }),
        dateofMarriage: new FormControl(this.formatDate(this.personal.dateofMarriage), { validators: Validators.required, updateOn: 'submit' }),
        maritalStatus: new FormControl(this.personal.maritalStatus, { validators: Validators.required, updateOn: 'submit' }),
      });
    }
    if (this.showTabs2) {
      this.addressForm = new FormGroup({
        permanentAddress: new FormControl(this.address.permanentAddress, { validators: Validators.required, updateOn: 'submit' }),
        permanentAddress2: new FormControl(this.address.permanentAddress2, { validators: Validators.required, updateOn: 'submit' }),
        permanentCity: new FormControl(this.address.permanentCity, { validators: Validators.required, updateOn: 'submit' }),
        permanentCountry: new FormControl(this.address.permanentCountry, { validators: Validators.required, updateOn: 'submit' }),
        permanentState: new FormControl(this.address.permanentState, { validators: Validators.required, updateOn: 'submit' }),
        permanentPostalcode: new FormControl(this.address.permanentPostalcode, { validators: Validators.required, updateOn: 'submit' }),
        presentAddress: new FormControl(this.address.presentAddress, { validators: Validators.required, updateOn: 'submit' }),
        presentAddress2: new FormControl(this.address.presentAddress2, { validators: Validators.required, updateOn: 'submit' }),
        presentPostalcode: new FormControl(this.address.presentPostalcode, { validators: Validators.required, updateOn: 'submit' }),
        presentCity: new FormControl(this.address.presentCity, { validators: Validators.required, updateOn: 'submit' }),
        presentState: new FormControl(this.address.presentState, { validators: Validators.required, updateOn: 'submit' }),
        presentCountry: new FormControl(this.address.presentCountry, { validators: Validators.required, updateOn: 'submit' }),

      });
    }
    if (this.showTabs3) {
      this.contactForm = new FormGroup({
        mobileNo: new FormControl(this.contact.mobileNo, { validators: Validators.required, updateOn: 'submit' }),
        alternateMobile: new FormControl(this.contact.alternateMobile, { validators: Validators.required, updateOn: 'submit' }),
        personalEmailId: new FormControl(this.contact.personalEmailId, { validators: Validators.required, updateOn: 'submit' }),
        professionalEmailId: new FormControl(this.contact.professionalEmailId, { validators: Validators.required, updateOn: 'submit' }),
        homeTelephone: new FormControl(this.contact.homeTelephone, { validators: Validators.required, updateOn: 'submit' }),
        emergencyContactPersonName: new FormControl(this.contact.emergencyContactPersonName, { validators: Validators.required, updateOn: 'submit' }),
        relationshipWithContactPerson: new FormControl(this.contact.relationshipWithContactPerson, { validators: Validators.required, updateOn: 'submit' }),
        contactPersonNumber: new FormControl(this.contact.contactPersonNumber, { validators: Validators.required, updateOn: 'submit' }),
        contactPersonAddress: new FormControl(this.contact.contactPersonAddress, { validators: Validators.required, updateOn: 'submit' }),
        alternateEmergencyContactPersonName: new FormControl(this.contact.alternateEmergencyContactPersonName, { validators: Validators.required, updateOn: 'submit' }),
        alternateRelationshipWithContactPerson: new FormControl(this.contact.alternateRelationshipWithContactPerson, { validators: Validators.required, updateOn: 'submit' }),
        alternateContactPersonNumber: new FormControl(this.contact.alternateContactPersonNumber, { validators: Validators.required, updateOn: 'submit' }),
        alternateContactPersonAddress: new FormControl(this.contact.alternateContactPersonAddress, { validators: Validators.required, updateOn: 'submit' }),
      });
    }
    if (this.showTabs4) {
      this.familyForm = new FormGroup({
        relation: new FormControl(this.family.relation, { validators: Validators.required, updateOn: 'submit' }),
        name: new FormControl(this.family.name, { validators: Validators.required, updateOn: 'submit' }),
        dateOfBirth: new FormControl(this.formatDate(this.family.dateOfBirth), { validators: Validators.required, updateOn: 'submit' }),
        contactNo: new FormControl(this.family.contactNo, { validators: Validators.required, updateOn: 'submit' }),
      });
    }

    if (this.showTabs5) {
      this.identityForm = new FormGroup({
        //--------------------
        aadhaarNo: new FormControl(this.identity.aadhaarNo, { validators: Validators.required, updateOn: 'submit' }),
        nameAsAadhaar: new FormControl(this.identity.nameAsAadhaar, { validators: Validators.required, updateOn: 'submit' }),
        dobAsAadhaar: new FormControl(this.formatDate(this.identity.dobAsAadhaar), { validators: Validators.required, updateOn: 'submit' }),
        // aadhaarAttach: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        //----------------------
        panNo: new FormControl(this.identity.panNo, { validators: Validators.required, updateOn: 'submit' }),
        nameAsPan: new FormControl(this.identity.nameAsPan, { validators: Validators.required, updateOn: 'submit' }),
        dobAsPan: new FormControl(this.formatDate(this.identity.dobAsPan), { validators: Validators.required, updateOn: 'submit' }),
        // panAttach: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        //----------------------
        passportNo: new FormControl(this.identity.passportNo, { validators: Validators.required, updateOn: 'submit' }),
        passportType: new FormControl(this.identity.passportType, { validators: Validators.required, updateOn: 'submit' }),
        passportVaildTill: new FormControl(this.formatDate(this.identity.passportVaildTill), { validators: Validators.required, updateOn: 'submit' }),
        // passportAttach: new FormControl(this.identity.passportAttach, { validators: Validators.required, updateOn: 'submit' }),
        //---------------
        dlNo: new FormControl(this.identity.dlNo, { validators: Validators.required, updateOn: 'submit' }),
        dlVaildTill: new FormControl(this.formatDate(
          this.identity.dlVaildTill), { validators: Validators.required, updateOn: 'submit' }),
        dobAsDL: new FormControl(this.formatDate(this.identity.dobAsDL), { validators: Validators.required, updateOn: 'submit' }),
        // dlAttach: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      })
    }
    if (this.showTabs6) {
      this.educationForm = new FormGroup({
        // educationName: new FormControl(this.education.educationName, { validators: Validators.required, updateOn: 'submit' }),
        // level: new FormControl(this.education.level, { validators: Validators.required, updateOn: 'submit' }),
        // institute: new FormControl(this.education.institute, { validators: Validators.required, updateOn: 'submit' }),
        // specialization: new FormControl(this.education.specialization, { validators: Validators.required, updateOn: 'submit' }),
        // score: new FormControl(this.education.score, { validators: Validators.required, updateOn: 'submit' }),
        // startDate: new FormControl(this.education.startDate, { validators: Validators.required, updateOn: 'submit' }),
        // endDate: new FormControl(this.education.endDate, { validators: Validators.required, updateOn: 'submit' }),

        // level: new FormControl(this.education?.level ?? '', { validators: Validators.required, updateOn: 'submit' }),
        // institute: new FormControl(this.education?.institute ?? '', { validators: Validators.required, updateOn: 'submit' }),
        // specialization: new FormControl(this.education?.specialization ?? '', { validators: Validators.required, updateOn: 'submit' }),
        // year: new FormControl(this.education?.year ?? '', { validators: Validators.required, updateOn: 'submit' }),
        // score: new FormControl(this.education?.score ?? '', { validators: Validators.required, updateOn: 'submit' }),
        // startDate: new FormControl(this.education?.startDate ?? '', { validators: Validators.required, updateOn: 'submit' }),
        // endDate: new FormControl(this.education?.endDate ?? '', { validators: Validators.required, updateOn: 'submit' }),
        level: new FormControl(this.education.level, { validators: Validators.required, updateOn: 'submit' }),
        institute: new FormControl(this.education.institute, { validators: Validators.required, updateOn: 'submit' }),
        specialization: new FormControl(this.education.specialization, { validators: Validators.required, updateOn: 'submit' }),
        year: new FormControl(this.education.year, { validators: Validators.required, updateOn: 'submit' }),
        score:new FormControl(this.education.score, { validators: Validators.required, updateOn: 'submit' }),
        startDate: new FormControl(this.formatDate(this.education.startDate), { validators: Validators.required, updateOn: 'submit' }),
        endDate: new FormControl(this.formatDate(this.education.endDate), { validators: Validators.required, updateOn: 'submit' }),
      })
    }
    if (this.showTabs7) {
      this.jobForm = new FormGroup({
        company: new FormControl(this.job.company, { validators: Validators.required, updateOn: 'submit' }),
        jobTitle: new FormControl(this.job.jobTitle, { validators: Validators.required, updateOn: 'submit' }),
        fromDate: new FormControl(this.formatDate(this.job.fromDate), { validators: Validators.required, updateOn: 'submit' }),
        toDate: new FormControl(this.formatDate(this.job.toDate), { validators: Validators.required, updateOn: 'submit' }),
      })
    }
  }

  ngOnInit() {
    // Retrieve the empid from the query parameters
    this.route.queryParams.subscribe(params => {
      this.empid = params['empid'];
      this.getEmployeeListById(this.empid);
      this.getContactListById(this.empid);
      this.getAddressListById(this.empid);
      this.getEducationListById(this.empid);
      this.getIdentityListById(this.empid)
      this.getJobListById(this.empid)
      this.getDepartmentListById(this.empid)
      this.getDesignationListById(this.empid)
      // this.getEmploymentListById(this.empid)
      this.getFamilyListById(this.empid);
      this.getEmploymentProfileListById(this.empid);
      this.getLanguageListById(this.empid);
      this.getCertificateListById(this.empid);
      this.getEmpRelationList(this.empid);
      this.getBankListById(this.empid);
      // Now you have the empid available for use in this component
      this.getCountryOptions();
      this.getStateOptions();
      this.getSalaryListById(this.empid);
      this.getEPFListById(this.empid);
      this.getESICListById(this.empid);
      this.getMedicalListById(this.empid);

      if (this.contactId) {
        this.getContactDetailsById(this.contactId);
      }
    });

  }
  empid: any
  EmployeeForm: FormGroup;
  addressForm: FormGroup;
  contactForm: FormGroup;
  identityForm: FormGroup;
  educationForm: FormGroup;
  showTabs2: boolean = false;
  familyForm: FormGroup;
  jobForm: FormGroup;
  constructor(private fb: FormBuilder,
    private EmployeeServiceService: EmployeeServiceService,
    private route: ActivatedRoute,
    private utilityService: UtilityServiceService,
    private toastr: ToastrService
    //private ContactServiceService :ContactservService,
    //private AddressServiceService :AddressserviceService
  ) {

    this.EmployeeForm = new FormGroup({
      fullName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      gender: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      fatherorHusbandName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      mobileNo: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      bloodGroup: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      reliegion: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      dob: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      dateofMarriage: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      maritalStatus: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
    }),

      this.addressForm = new FormGroup({

        permanentAddress: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        permanentAddress2: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        permanentCity: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        permanentCountry: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        permanentState: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        permanentPostalcode: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        presentAddress: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        presentAddress2: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        presentPostalcode: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        presentCity: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        presentState: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        presentCountry: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

      })
    this.contactForm = new FormGroup({
      mobileNo: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      alternateMobile: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      personalEmailId: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      professionalEmailId: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      homeTelephone: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      emergencyContactPersonName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      relationshipWithContactPerson: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      contactPersonNumber: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      contactPersonAddress: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      alternateEmergencyContactPersonName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      alternateRelationshipWithContactPerson: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      alternateContactPersonNumber: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      alternateContactPersonAddress: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
    }),
      this.familyForm = new FormGroup({
        relation: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        name: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        dateOfBirth: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        contactNo: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      }),
      this.identityForm = new FormGroup({

        //--------------------
        aadhaarNo: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        nameAsAadhaar: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        dobAsAadhaar: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        // aadhaarAttach: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        //----------------------

        panNo: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        nameAsPan: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        dobAsPan: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        // panAttach: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),


        //----------------------
        passportNo: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        passportType: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        passportVaildTill: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        // passportAttach: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        //---------------

        dlNo: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        dlVaildTill: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        dobAsDL: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),

        // dlAttach: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      }),
      this.educationForm = new FormGroup({
        // educationName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        level: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        institute: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        specialization: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        year: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        score: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        startDate: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        endDate: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      }),
      this.jobForm = new FormGroup({
        company: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        jobTitle: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        fromDate: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
        toDate: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      })
  };


  showTabs: boolean = false;
  showTabs3: boolean = false;
  showTabs4: boolean = false;
  showTabs5: boolean = false;
  showTabs6: boolean = false;

  showTabs7: boolean = false;
  showTabs8: boolean = false;
  showTabs9: boolean = false;
  showTabs10: boolean = false;

  toggleTabs() {
    this.showTabs = !this.showTabs;
    // this.EmployeeForm.reset();
    this.initializeForm();
  }
  toggleTabs2() {
    this.showTabs2 = !this.showTabs2;
    this.initializeForm();
  }
  toggleTabs3() {
    this.showTabs3 = !this.showTabs3;
    this.initializeForm();
  }

  familyTab() {
    this.showTabs4 = !this.showTabs4;
    this.initializeForm();
  }
  //   familyTab() {
  //     this.showTabs4 = !this.showTabs4;
  //     this.initializeForm();

  //     if (this.family) { // Ensure this.family is defined
  //       this.familyForm.patchValue({
  //         relation: this.family.relation,
  //         name: this.family.name,
  //         dateOfBirth: this.family.dateOfBirth,
  //         contactNo: this.family.contactNo
  //       });
  //     }
  // }


  toggleTabs5() {
    this.showTabs5 = !this.showTabs5;
    this.initializeForm();
  }
  educationTab() {
    this.showTabs6 = !this.showTabs6;
    this.initializeForm();
  }

  jobTab() {
    this.showTabs7 = !this.showTabs7;
    this.initializeForm();
  }

  toggleTabs8() {
    this.showTabs8 = !this.showTabs8;
  }

  toggleTabs9() {
    this.showTabs9 = !this.showTabs9;
  }

  toggleTabs10() {
    this.showTabs10 = !this.showTabs10;
  }

  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  changeToUpperCase(formName: FormGroup, inputName: string) {
    this.utilityService.changeToUpperCase(formName, inputName)
  }

  firstLetterCapital(formName: FormGroup, inputName: string) {
    this.utilityService.firstLetterCapital(formName, inputName)
  }

  handleFormSubmission(EmployeeForm: FormGroup) {
    EmployeeForm.markAllAsTouched()
    if (EmployeeForm.valid) {
      let formObj = {
        // "empPersDtlId": parseInt(this.empid),//
        "fullName": EmployeeForm.value.fullName,//
        "dob": EmployeeForm.value.dob,//
        "gender": EmployeeForm.value.gender,//
        "bloodGroup": EmployeeForm.value.bloodGroup,//
        "reliegion": EmployeeForm.value.reliegion,//
        "fatherorHusbandName": EmployeeForm.value.fatherorHusbandName,
        "maritalStatus": EmployeeForm.value.maritalStatus,//
        "dateofMarriage": EmployeeForm.value.dateofMarriage,//
        "mobileNo": String(EmployeeForm.value.mobileNo),//
        "email": "string",
        // "remarks": "string",
        // "empPersDtlsId": [parseInt(this.empid)],

        // "isActive": true,
        // "createdOn": "2024-03-17T11:17:14.984Z",
        "createdBy": "string",
        "updatedBy": "string",
        // "updatedOn": "2024-03-17T11:17:14.984Z",
      }
      console.log(formObj)
      this.EmployeeServiceService.updateEmployeeDetail(formObj, this.empid).subscribe((res) => {
        this.toastr.success('Form submitted successfully');
        this.getEmployeeListById(this.empid);
        this.toggleTabs();
      })
    }
    else {
      this.toastr.error('Please fill all values')
    }
  }

  handleFormSubmissionAddress(addressForm: FormGroup) {
    addressForm.markAllAsTouched();
    console.log(addressForm.value)
    if (addressForm.valid) {
      let formObj = {

        "empRegId": parseInt(this.empid),

        "presentAddress": addressForm.value.presentAddress,
        "presentAddress2": addressForm.value.presentAddress2,
        "presentCity": addressForm.value.presentCity,
        "presentPostalcode": addressForm.value.presentPostalcode,
        "presentState": addressForm.value.presentState,
        "presentCountry": addressForm.value.presentCountry,

        "permanentAddress": addressForm.value.permanentAddress,
        "permanentAddress2": addressForm.value.permanentAddress2,
        "permanentCity": addressForm.value.permanentCity,
        "permanentPostalcode": addressForm.value.permanentPostalcode,
        "permanentCountry": addressForm.value.permanentCountry,
        "permanentState": addressForm.value.permanentState,

        "addressIds": null
      }
      this.EmployeeServiceService.updateAddressDetail(formObj, this.empid).subscribe((res) => {
        this.toastr.success('Form submitted successfully');
        this.getAddressListById(this.empid);
        this.toggleTabs2();
        // this.getEmployeeListById(this.empid);

      })
    }
    else {
      this.toastr.error('Please fill all values')
    }
  }
  // handleFormSubmissionContact(contactForm: FormGroup) {
  //   debugger
  //   contactForm.markAllAsTouched();
  //   console.log(contactForm.value)
  //   if (contactForm.valid) {
  //     let formObj = {
  //       isActive: true,
  //       createdOn: new Date().toISOString(),
  //       createdBy: "",
  //       updatedBy: "",
  //       updatedOn: new Date().toISOString(),
  //       empRegId: this.empid,
  //       mobileNo: contactForm.value.mobileNo,//
  //       alternateMobile: contactForm.value.alternateMobile,
  //       personalEmailId: contactForm.value.personalEmailId,//
  //       professionalEmailId: contactForm.value.professionalEmailId,//
  //       homeTelephone: contactForm.value.homeTelephone,//
  //       emergencyContactPersonName: contactForm.value.emergencyContactPersonName,//
  //       relationshipWithContactPerson: contactForm.value.relationshipWithContactPerson,//
  //       contactPersonNumber: contactForm.value.contactPersonNumber,//
  //       contactPersonAddress: contactForm.value.contactPersonAddress,//
  //       alternateEmergencyContactPersonName: contactForm.value.alternateEmergencyContactPersonName,
  //       alternateRelationshipWithContactPerson: contactForm.value.alternateRelationshipWithContactPerson,
  //       alternateContactPersonNumber: contactForm.value.alternateContactPersonNumber,
  //       alternateContactPersonAddress: contactForm.value.alternateContactPersonAddress,
  //       remarks: "string",
  //     }
  //     console.log("lelo",this.empid);
  //     console.log(formObj)

  //     this.EmployeeServiceService.updateContactDetail(formObj, this.empid).subscribe((res) => {
  //       console.log("lelo",this.empid);
  //       this.toastr.success('Form submitted successfully');
  //       this.getContactListById(this.empid)
  //       this.toggleTabs3();
  //     })
  //   }
  //   else {
  //     this.toastr.error('Please fill all values')
  //   }
  // }

  handleFormSubmissionContact(contactForm: FormGroup) {
    contactForm.markAllAsTouched();
    if (contactForm.valid) {
      let formObj = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "",
        updatedBy: "",
        updatedOn: new Date().toISOString(),
        empRegId: this.empid,
        mobileNo: contactForm.value.mobileNo,//
        alternateMobile: contactForm.value.alternateMobile,
        personalEmailId: contactForm.value.personalEmailId,//
        professionalEmailId: contactForm.value.professionalEmailId,//
        homeTelephone: contactForm.value.homeTelephone,//
        emergencyContactPersonName: contactForm.value.emergencyContactPersonName,//
        relationshipWithContactPerson: contactForm.value.relationshipWithContactPerson,//
        contactPersonNumber: contactForm.value.contactPersonNumber,//
        contactPersonAddress: contactForm.value.contactPersonAddress,//
        alternateEmergencyContactPersonName: contactForm.value.alternateEmergencyContactPersonName,
        alternateRelationshipWithContactPerson: contactForm.value.alternateRelationshipWithContactPerson,
        alternateContactPersonNumber: contactForm.value.alternateContactPersonNumber,
        alternateContactPersonAddress: contactForm.value.alternateContactPersonAddress,
        remarks: "string",
        contactId: this.contactId
      };

      this.EmployeeServiceService.updateContactDetail(formObj, this.contactId).subscribe(
        (res) => {
          console.log("lelo", this.contactId);
          this.toastr.success('Form submitted successfully');
          this.getContactListById(this.empid);
          this.toggleTabs3();
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastr.error('Some Error Occur');
        }
      );
    } else {
      this.toastr.error('Please fill all values');
    }
  }

  contactId: any;
  getContactDetailsById(contactId: string) {
    this.EmployeeServiceService.getContactDetailById(contactId).subscribe(
      (res: any) => {
        this.contactForm.patchValue({
          mobileNo: res.mobileNo,
          alternateMobile: res.alternateMobile,
          personalEmailId: res.personalEmailId,
          professionalEmailId: res.professionalEmailId,
          homeTelephone: res.homeTelephone,
          emergencyContactPersonName: res.emergencyContactPersonName,
          relationshipWithContactPerson: res.relationshipWithContactPerson,
          contactPersonNumber: res.contactPersonNumber,
          contactPersonAddress: res.contactPersonAddress,
          alternateEmergencyContactPersonName: res.alternateEmergencyContactPersonName,
          alternateRelationshipWithContactPerson: res.alternateRelationshipWithContactPerson,
          alternateContactPersonNumber: res.alternateContactPersonNumber,
          alternateContactPersonAddress: res.alternateContactPersonAddress
        });
      },
      (error) => {
        console.error('An error occurred while fetching contact details:', error);
      }
    );
  }

  // handleFormSubmissionFamily(familyForm: FormGroup) {
  //   familyForm.markAllAsTouched();
  //   if (familyForm.valid) {
  //     let formObj = {
  //       isActive: true,
  //       createdOn: new Date().toISOString(),
  //       createdBy: "",
  //       updatedBy: "",
  //       updatedOn: new Date().toISOString(),
  //       "empRegId": this.empid,
  //       "relation": familyForm.value.relation,
  //       "name": familyForm.value.name,
  //       "dateOfBirth": familyForm.value.dateOfBirth,
  //       "contactNo": familyForm.value.contactNo,
  //       "remarks": "string",
  //     }

  //     console.log(formObj)
  //     this.EmployeeServiceService.updatefamilyDetail(formObj, this.empid).subscribe((res) => {
  //       this.toastr.success('Form submitted successfully');
  //       this.getFamilyListById(this.empid);
  //       this.familyTab();
  //     }
  //       // ,
  //       //   (error) => {
  //       //     console.error('An error occurred:', error);
  //       //     this.toastr.error('Mobile No already exists enter new ');
  //       //     this.getFamilyListById(this.empid);
  //       //     this.familyTab();
  //       //   }
  //     )
  //   }
  //   else {
  //     this.toastr.error('Please fill all values');
  //   }
  // }
  // familyId: any; 
  // handleFormSubmissionFamily(familyForm: FormGroup) {
  //   debugger
  //   console.log("Form Values:", familyForm.value);
  //   if (familyForm.valid) {
  //     let formObj = {
  //       isActive: true,
  //       createdOn: new Date().toISOString(),
  //       createdBy: "",
  //       updatedBy: "",
  //       updatedOn: new Date().toISOString(),
  //       empRegId: this.empid,
  //       // familyId: this.familyId,
  //       // familyId: this.empid,
  //       familyId: familyForm.get('familyId')?.value,
  //       relation: familyForm.value.relation,
  //       name: familyForm.value.name,
  //       dateOfBirth: familyForm.value.dateOfBirth,
  //       contactNo: familyForm.value.contactNo,
  //       remarks: "string",
  //     };
  //     console.log("Payload:", formObj);  // Check if payload is correct
  //     console.log("lelo:", this.familyId);
  //     this.EmployeeServiceService.updatefamilyDetail(formObj, this.familyId).subscribe((res) => {
  //       console.log("heello:", this.familyId);
  //       this.toastr.success('Form submitted successfully');
  //       this.getFamilyListById(this.empid);
  //       this.familyTab();
  //     }, (error) => {
  //       console.error('An error occurred:', error);
  //       this.toastr.error('Some Error Occur');
  //     });
  //   } else {
  //     this.toastr.error('Please fill all values');
  //   }
  // }

  //#region added by Amandeep Virdhi on 12-08-2024 for update relation in profile component
  familyId: any;
  editFamilyMember(member: any) {
    this.familyId = member.familyId; // Set the familyId for use in the update
    this.showTabs4 = true; // Show the modal
    this.familyForm.patchValue({
      name: member.name,
      relation: member.relation,
      dateOfBirth: member.dateOfBirth,
      contactNo: member.contactNo,
    });
  }
  //#endregion
  handleFormSubmissionFamily(familyForm: FormGroup) {
    debugger
    if (familyForm.valid) {
      let formObj = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "",
        updatedBy: "",
        updatedOn: new Date().toISOString(),
        empRegId: this.empid,
        familyId: this.familyId, // Correctly using the familyId
        relation: familyForm.value.relation,
        name: familyForm.value.name,
        dateOfBirth: familyForm.value.dateOfBirth,
        contactNo: familyForm.value.contactNo,
        remarks: "string",
      };

      this.EmployeeServiceService.updatefamilyDetail(formObj, this.familyId).subscribe(
        (res) => {
          this.toastr.success('Form submitted successfully');
          this.getFamilyListById(this.empid);
          this.familyTab();
        },
        (error) => {
          // console.error('An error occurred:', error);
          this.toastr.error('Phone Number is Required');
        }
      );
    } else {
      this.toastr.error('Please fill all values');
    }
  }

  handleFormSubmissionIdentity(identityForm: FormGroup) {
    identityForm.markAllAsTouched();
    console.log(identityForm.value)
    if (identityForm.valid) {
      let formObj = {

        "isActive": true,
        "createdOn": "2024-04-27T06:00:44.359Z",
        "createdBy": "string",
        "updatedBy": "string",
        "updatedOn": "2024-04-27T06:00:44.359Z",

        "empRegId": this.empid,

        "aadhaarNo": identityForm.value.aadhaarNo,
        "nameAsAadhaar": identityForm.value.nameAsAadhaar,
        "dobAsAadhaar": identityForm.value.dobAsAadhaar,
        "aadhaarAttach": this.filesave1 ? this.filesave1 : this.identity.aadhaarAttach,

        "panNo": identityForm.value.panNo,
        "nameAsPan": identityForm.value.nameAsPan,
        "dobAsPan": identityForm.value.dobAsPan,
        "panAttach": this.filesave2 ? this.filesave2 : this.identity.panAttach,

        "passportNo": identityForm.value.passportNo,
        "passportType": identityForm.value.passportType,
        "passportVaildTill": identityForm.value.passportVaildTill,
        "passportAttach": this.filesave3 ? this.filesave3 : this.identity.passportAttach,

        "dlNo": identityForm.value.dlNo,
        "dlVaildTill": identityForm.value.dlVaildTill,
        "dobAsDL": identityForm.value.dobAsDL,
        "dlAttach": this.filesave4 ? this.filesave4 : this.identity.dlAttach,
        "remarks": "string",
        "empIdentityIds": [
          0
        ]
      }
      console.log(formObj);
      this.EmployeeServiceService.updateidentityDetail(formObj, this.empid).subscribe((res) => {
        this.toastr.success('Form submitted successfully');
        this.getIdentityListById(this.empid);
        this.toggleTabs5();
      })
    }
    else {
      this.toastr.error('Please fill all values')
    }
  }
  // handleFormSubmissionEducation(educationForm: FormGroup) {
  //   educationForm.markAllAsTouched();
  //   console.log(educationForm.value)
  //   if (educationForm.valid) {
  //     let formObj = {
  //       // "educationName": educationForm.value.educationName,
  //       isActive: true,
  //       createdOn: new Date().toISOString(),
  //       createdBy: "",
  //       updatedBy: "",
  //       updatedOn: new Date().toISOString(),
  //       educationId: 0,
  //       empRegId: this.empid,
  //       level: educationForm.value.level,
  //       institute: educationForm.value.institute,
  //       specialization: educationForm.value.specialization,
  //       year: "",
  //       score: educationForm.value.score,
  //       startDate: educationForm.value.startDate,
  //       endDate: educationForm.value.endDate,
  //       attachment: "",
  //       remarks: "",
  //     }
  //     console.log(formObj)
  //     this.EmployeeServiceService.updateeducationDetail(formObj, this.empid).subscribe((res) => {
  //       this.toastr.success('Form submitted successfully');
  //       this.getEducationListById(this.empid);
  //       this.educationTab();
  //     })
  //   }
  //   else {
  //     this.toastr.error('Please fill all values')
  //   }
  // }
  educationId: any;
  editEducation(education: any) {
    this.educationId = education.educationId; // Set the familyId for use in the update
    this.showTabs6 = true;
    this.educationForm.patchValue({
      level: education.level,
      institute: education.institute,
      specialization: education.specialization,
      year: education.year,
      score: education.score,
      startDate: education.startDate,
      endDate: education.endDate,
    });
  }
  handleFormSubmissionEducation(educationForm: FormGroup) {
    educationForm.markAllAsTouched();
    if (educationForm.valid) {
      let formObj = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "",
        updatedBy: "",
        updatedOn: new Date().toISOString(),
        educationId: this.educationId, // Use stored educationId if updating
        empRegId: this.empid,
        level: educationForm.value.level,
        institute: educationForm.value.institute,
        specialization: educationForm.value.specialization,
        year: educationForm.value.year,
        score: educationForm.value.score,
        startDate: educationForm.value.startDate,
        endDate: educationForm.value.endDate,
        attachment: "",
        remarks: "",
      };
      this.EmployeeServiceService.updateeducationDetail(formObj, this.educationId).subscribe(
        (res) => {
          this.toastr.success('Form submitted successfully');
          this.getEducationListById(this.empid);
          this.educationTab();
        },
        (error) => {
          // console.error('An error occurred:', error);
          this.toastr.error('Some Error Occur');
        }
      );
    } else {
      this.toastr.error('Please fill all values');
    }
  }
//#region added by Amandeep Virdhi on 22-08-2024 for edit work experience
  workExpId: any;
  editJob(job: any) {
    this.workExpId = job.workExpId; // Set the familyId for use in the update
    this.showTabs7 = true;
    this.jobForm.patchValue({
      company: job.company,
      jobTitle: job.jobTitle,
      fromDate: job.fromDate,
      toDate: job.toDate,
    });
  }
  handleFormSubmissionJob(jobForm: FormGroup) {
    jobForm.markAllAsTouched();
    if (jobForm.valid) {
      let formObj = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "",
        updatedBy: "",
        updatedOn: new Date().toISOString(),
        workExpId: this.workExpId,
        empRegId: this.empid,
        company: jobForm.value.company,
        jobTitle: jobForm.value.jobTitle,
        fromDate: jobForm.value.fromDate,
        toDate: jobForm.value.toDate,
        attachment: this.filesave_job ? this.filesave_job : '',
        remarks: "",
      }
      this.EmployeeServiceService.updatejobDetail(formObj, this.workExpId).subscribe(
        (res) => {
          this.toastr.success('Form submitted successfully');
          this.getJobListById(this.empid);
          this.jobTab();
        },
        (error) => {
          console.error('An error occurred:', error);
          this.toastr.error('Some Error Occur');
        }
      );
    } else {
      this.toastr.error('Please fill all values');
    }
  }
//#region 

  get bloodGroup(): AbstractControl {
    return this.EmployeeForm.get('bloodGroup')!;
  }

  get reliegion(): AbstractControl {
    return this.EmployeeForm.get('reliegion')!;
  }
  get fatherorHusbandName(): AbstractControl {
    return this.EmployeeForm.get('fatherorHusbandName')!;
  }

  get maritalStatus(): AbstractControl {
    return this.EmployeeForm.get('maritalStatus')!;
  }
  get mobileNo(): AbstractControl {
    return this.EmployeeForm.get('mobileNo')!;
  }
  get gender(): AbstractControl {
    return this.EmployeeForm.get('gender')!;
  }
  get dateofMarriage(): AbstractControl {
    return this.EmployeeForm.get('dateofMarriage')!;
  }
  get dob(): AbstractControl {
    return this.EmployeeForm.get('dob')!;
  }
  get fullName(): AbstractControl {
    return this.EmployeeForm.get('fullName')!;
  }

  //address getters
  get presentAddress(): AbstractControl {
    return this.addressForm.get('presentAddress')!;
  }
  get permanentAddress(): AbstractControl {
    return this.addressForm.get('permanentAddress')!;
  }

  get permanentCity(): AbstractControl {
    return this.addressForm.get('permanentCity')!;
  }
  get presentCity(): AbstractControl {
    return this.addressForm.get('presentCity')!;
  }

  get presentState(): AbstractControl {
    return this.addressForm.get('presentState')!;
  }
  get permanentState(): AbstractControl {
    return this.addressForm.get('permanentState')!;
  }
  get permanentPostalcode(): AbstractControl {
    return this.addressForm.get('permanentPostalcode')!;
  }
  get presentPostalcode(): AbstractControl {
    return this.addressForm.get('presentPostalcode')!;
  }
  get permanentCountry(): AbstractControl {
    return this.addressForm.get('permanentCountry')!;
  }
  get presentCountry(): AbstractControl {
    return this.addressForm.get('presentCountry')!;
  }

  get presentAddress2(): AbstractControl {
    return this.addressForm.get('presentAddress2')!;
  }
  get permanentAddress2(): AbstractControl {
    return this.addressForm.get('permanentAddress2')!;
  }

  //family getters
  get relation(): AbstractControl {
    return this.familyForm.get('relation')!;
  }

  get name(): AbstractControl {
    return this.familyForm.get('name')!;
  }

  get dateOfBirth(): AbstractControl {
    return this.familyForm.get('dateOfBirth')!;
  }

  get contactNo(): AbstractControl {
    return this.familyForm.get('contactNo')!;
  }


  //contact getters
  // get mobile(): AbstractControl {
  //   return this.contactForm.get('mobile')!;
  // }
  get personalEmailId(): AbstractControl {
    return this.contactForm.get('personalEmailId')!;
  }
  get professionalEmailId(): AbstractControl {
    return this.contactForm.get('professionalEmailId')!;
  }
  get homeTelephone(): AbstractControl {
    return this.contactForm.get('homeTelephone')!;
  }
  //  get officeTelephone(): AbstractControl {
  //   return this.contactForm.get('officeTelephone')!;
  //  }

  get emergencyContactPersonName(): AbstractControl {
    return this.contactForm.get('emergencyContactPersonName')!;
  }
  get contactPersonNumber(): AbstractControl {
    return this.contactForm.get('contactPersonNumber')!;
  }
  get relationshipWithContactPerson(): AbstractControl {
    return this.contactForm.get('relationshipWithContactPerson')!;
  }
  get contactPersonAddress(): AbstractControl {
    return this.contactForm.get('contactPersonAddress')!;
  }

  get alternateEmergencyContactPersonName(): AbstractControl {
    return this.contactForm.get('alternateEmergencyContactPersonName')!;
  }
  get alternateRelationshipWithContactPerson(): AbstractControl {
    return this.contactForm.get('alternateRelationshipWithContactPerson')!;
  }
  get alternateContactPersonAddress(): AbstractControl {
    return this.contactForm.get('alternateContactPersonAddress')!;
  }

  get alternateContactPersonNumber(): AbstractControl {
    return this.contactForm.get('alternateContactPersonNumber')!;
  }



  //identity getters
  get aadharNo(): AbstractControl {
    return this.identityForm.get('aadharNo')!;
  }
  get nameAsAadhaar(): AbstractControl {
    return this.identityForm.get('nameAsAadhaar')!;
  }
  get dobAsAadhaar(): AbstractControl {
    return this.identityForm.get('dobAsAadhaar')!;
  }
  // get aadhaarAttach(): AbstractControl {
  //   return this.identityForm.get('aadhaarAttach')!;
  // }

  get panNo(): AbstractControl {
    return this.identityForm.get('panNo')!;
  }
  // get panAttach(): AbstractControl {
  //   return this.identityForm.get('panAttach')!;
  // }
  get nameAsPan(): AbstractControl {
    return this.identityForm.get('nameAsPan')!;
  }
  get dobAsPan(): AbstractControl {
    return this.identityForm.get('dobAsPan')!;
  }


  get passportNo(): AbstractControl {
    return this.identityForm.get('passportNo')!;
  }
  get passportType(): AbstractControl {
    return this.identityForm.get('passportType')!;
  }
  // get passportAttach(): AbstractControl {
  //   return this.identityForm.get('passportAttach')!;
  // }
  get passportVaildTill(): AbstractControl {
    return this.identityForm.get('passportVaildTill')!;
  }

  get dlNo(): AbstractControl {
    return this.identityForm.get('dlNo')!;
  }
  get dlValidTill(): AbstractControl {
    return this.identityForm.get('dlValidTill')!;
  }
  // get dlAttach(): AbstractControl {
  //   return this.identityForm.get('dlAttach')!;
  // }
  get dobAsDL(): AbstractControl {
    return this.identityForm.get('dobAsDL')!;
  }
  //education getters
  get level(): AbstractControl {
    return this.educationForm.get('level')!;
  }
  get institute(): AbstractControl {
    return this.educationForm.get('institute')!;
  }
  get specialization(): AbstractControl {
    return this.educationForm.get('specialization')!;
  }
  get year(): AbstractControl {
    return this.educationForm.get('year')!;
  }
  get score(): AbstractControl {
    return this.educationForm.get('score')!;
  }
  get startDate(): AbstractControl {
    return this.educationForm.get('startDate')!;
  }
  get endDate(): AbstractControl {
    return this.educationForm.get('endDate')!;
  }

  //job getters
  get company(): AbstractControl {
    return this.jobForm.get('company')!;
  }

  get jobTitle(): AbstractControl {
    return this.jobForm.get('jobTitle')!;
  }
  get fromDate(): AbstractControl {
    return this.jobForm.get('fromDate')!;
  }

  get toDate(): AbstractControl {
    return this.jobForm.get('toDate')!;
  }

  personal: any;
  contact: any;
  address: any;
  identity: any;
  job: any;
  department: any;
  designation: any;
  family: any;
  employment: any;
  language: any;
  languageList: any[] = [];
  certificate: any;
  certificateList: any[] = [];
  education: any;
  educationList: any[] = [];


  getEmployeeListById(empid: any) {
    // console.log("h1",empid);
    this.EmployeeServiceService.getEmpById(empid).subscribe(
      (res) => {
        this.personal = res;
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
        this.initializeForm();
      },
      (error) => {
        console.error(error);
      }
    )
    // console.log(this.personal.fullName)
  }


  getContactListById(empid: any) {
    // console.log("h3",empid);
    this.EmployeeServiceService.getContactById(empid).subscribe(


      (res) => {
        this.contact = res;
        console.log("resfor id one contact", this.contact)
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )

  }

  getAddressListById(empid: any) {
    // console.log("h3",empid);
    this.EmployeeServiceService.getAddressById(empid).subscribe(


      (res) => {
        // console.log("dcjn");
        this.address = res;
        // console.log("resfor id one address",this.address)
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )
  }


  getDesignationListById(empid: any) {
    // console.log("h1",empid);
    this.EmployeeServiceService.getDesignationById(empid).subscribe(


      (res) => {

        this.designation = res;
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )

    // console.log(this.education)
  }
  getDepartmentListById(empid: any) {
    // console.log("h1",empid);
    this.EmployeeServiceService.getDepartmentById(empid).subscribe(


      (res) => {

        this.department = res;
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )

    // console.log(this.education)
  }
  //#region 
  jobList: any[] = [];
  getJobListById(empid: any) {
    this.EmployeeServiceService.getJobById(empid).subscribe(
      (res: any[]) => {
        this.jobList = res;
        console.log(this.jobList);
      },
      (error) => {
        console.error(error);
      }
    )
  }
  //#endregion
  getIdentityListById(empid: any) {
    // console.log("h1",empid);
    this.EmployeeServiceService.getIdentityById(empid).subscribe(


      (res) => {

        this.identity = res;
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )
    // console.log(this.education)
  }

  formatDate(dateString: string): string {
    if (!dateString) return "na";
    // Extracting date part only
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  familyList: any[] = [];
  getFamilyListById(empid: any) {
    this.EmployeeServiceService.getFamilyById(empid).subscribe(
      (res) => {
        this.familyList = res;
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )
  }
  getEmploymentListById(empid: any) {
    this.EmployeeServiceService.getEmploymentById(empid).subscribe(
      (res) => {
        this.family = res;
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )

    // console.log(this.education)
  }
  //#region added by sapna for employment detils on 09 july 2024
  getEmploymentProfileListById(empRegId: any) {
    this.EmployeeServiceService.getEmploymentProfileById(empRegId).subscribe(
      (res) => {

        this.employment = res;

      },
      (error) => {
        console.error(error);
      }
    )
  }
  //#endregion


  //#region Added by amandeep on 10 july 2024 for eduction/ job/certifation/language
  getEducationListById(empid: any) {
    // console.log("h1",empid);
    this.EmployeeServiceService.getEducationById(empid).subscribe(
      (res) => {
        this.education = res;
        this.educationList = res;
        this.initializeForm();
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )
    // console.log(this.education)
  }
  getLanguageListById(empid: any) {
    // console.log("h1",empid);
    this.EmployeeServiceService.getLanguageById(empid).subscribe(
      (res) => {
        this.language = res;
        this.languageList = res;
        // console.log(this.languageList);
        // console.log(this.language);
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )
    // console.log(this.education)
  }
  getCertificateListById(empid: any) {
    // console.log("h1",empid);
    this.EmployeeServiceService.getCertificateById(empid).subscribe(
      (res) => {
        this.certificate = res;
        this.certificateList = res;
        // console.log(this.skillList);
        // console.log(this.skill);
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )
    // console.log(this.education)
  }
  //#endregion

  // #region added by Amandeep Virdhi ON 11-07-2024
  //Relation Dropdown
  empRelationList: any[] = [];
  getEmpRelationList(empid: any) {
    this.EmployeeServiceService.getAllEmpfamily().subscribe(options => {
      this.empRelationList = options;
    });
  }
  //regionend
  // #region added by Amandeep Virdhi ON 12-07-2024 for bank details
  bank: any;
  getBankListById(empid: any) {
    this.EmployeeServiceService.getBankById(empid).subscribe(
      (res) => {
        this.bank = res;
      },
      (error) => {
        console.error(error);
      }
    )
  }
  //#engregion

  /////////Upload Image/////////
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  getObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }
  getImageURL(imageFileName: string): string {
    // Assuming that your images are stored in a specific directory (e.g., 'assets/category-icons/')
    return `assets/img/${imageFileName}`;
  }

  //#region added by Amandeep Virdhi on 29-07-2024 country, state in update address info
  countryOptions: any[] = [];
  getCountryOptions() {
    this.EmployeeServiceService.getCountry().subscribe(options => {
      this.countryOptions = options;
    });
  }
  stateOptions: any[] = [];

  getStateOptions() {
    this.EmployeeServiceService.getState().subscribe(options => {
      this.stateOptions = options;
    });
  }
  //#endregion

  // #region added by Amandeep Virdhi ON 13-08-2024 for salary details
  salary: any;
  getSalaryListById(empid: any) {
    this.EmployeeServiceService.getSalaryById(empid).subscribe(
      (res) => {
        this.salary = res;
      },
      (error) => {
        console.error(error);
      }
    )
  }
  //#engregion
  isNumberKey(event: KeyboardEvent): boolean {
    const key = event.key;
    if (!/^[0-9]$/.test(key)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  //#region added by Amandeep Virdhi ON 16-08-2024 for EPF details
  empPF: any;
  getEPFListById(empid: any) {
    this.EmployeeServiceService.getEPFById(empid).subscribe(
      (res) => {
        this.empPF = res;
      },
      (error) => {
        console.error(error);
      }
    )
  }
  empESIC: any;
  getESICListById(empid: any) {
    this.EmployeeServiceService.getESICById(empid).subscribe(
      (res) => {
        this.empESIC = res;
      },
      (error) => {
        console.error(error);
      }
    )
  }
  medical: any;
  getMedicalListById(empid: any) {
    this.EmployeeServiceService.getMedicalById(empid).subscribe(
      (res) => {
        this.medical = res;
      },
      (error) => {
        console.error(error);
      }
    )
  }
  //#engregion
}