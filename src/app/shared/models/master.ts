//#region Added By Ganesh 13 March 2024
export interface departmentList {
    deptId: 0,
    departmentName: string,
    // "remarks": "string",
    // deptIds: null,
    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date
}
//#endregion

//#region Added By Ganesh 13 March 2024
export interface countryList {

    isActive: true,
    createdOn: Date,
    createdBy: string,
    countryId: 0,
    countryName: string,
    remarks: string,
}
//#endregion
//#region Added By Ganesh 14 March 2024
export interface designationList {
    desigId: 0,
    deptId: 1,
    designationName: string,
    departmentName: string,
    remarks: string,
    // desigIds: null,
    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date
}
//#endregion
//#region Added By Ganesh 14 March 2024
export interface roleList {
    isActive: true,
    createdOn: Date,
    createdBy: string,
    roleId: 0,
    roleName: string,
    remarks: string,
    updatedBy: string,
    updatedOn: Date
}
//#endregion

//#endregion
//#region Added By Ganesh 16 March 2024
export interface educationList {


    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    educationId: 0,
    educationName: string,
    remarks: string
}
//#endregion

//#region Added By Ganesh 16 March 2024
export interface jobTitleList {
    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    jobTitleId: 0,
    jobTitleName: string,
    jobDescription: string,
    // remarks: string
}
//#endregion

//#region Added By Ganesh 16 April 2024
export interface worktypeList {

    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    workTypeId: 0,
    workTypeName: string,
    remarks: string

}
//#endregion

//#region Added By Ganesh 16 April 2024
export interface bankList {

    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    bankId: 0,
    bankName: string,
    remarks: string

}
//#endregion
//#region Added By Ganesh 16 April 2024
export interface familyList {

    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    familyId: 0,
    familyName: string,
    remarks: string

}
//#endregion

//#region Added By Ganesh 16 April 2024
export interface empTypeList {

    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    empTypeId: 0,
    empTypeName: string,
    remarks: string

}
//#endregion
//#region Added By Ganesh 16 April 2024
export interface stateList {
    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    stateId: 0,
    countryId: 1,
    country: string,
    stateName: string,
}
//#endregion


//#region Added By Ganesh 16 March 2024
export interface workshiftList {

    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    workShiftId: 0,
    workShiftName: string,
    workFrom: string,
    workTo: string,
    totalHours: string,
    remarks: string

}
//#endregion

//#region Added By Ganesh 28 April 2024
export interface holidaytypetList {

    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    holidayTypeId: 0,
    holidayTypeName: string,
    remarks: string

}
//#endregion

//#region Added By Ganesh 28 April 2024
export interface officeList {
    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    officeId: 0,
    officeName: string,
    shortCode: string,
    address: string,
    landmark: string,
    state: string,
    city: string,
    locality: string,
    phoneNumber: string,
    alternateNo: string,
    email: string,
    officeManager: string,
    omContactNo: string,
    omEmail: string,
    zipCode: string,
    registrationNo: string,
    cloth: string,
    cinNo: string,
    gstinNo: string,
    bankDetail: string,
    inFavourof: string,
    bankAccountNumber: string,
    paymentMode: string,
    logo: string,
    remarks: string,
    clientId: 0

}
//#endregion
//#region Added By Sapna 03 july 2024
export interface SupervisorList {
    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    superVisorId: 0,
    empRegId: 0,
    superVisorName: string,
    departmentId: 0,
    desginationId: 0,
}
//#endregion

//#region Added By chetan on 11 july for manager
export interface managerList {
    "managerId": 0,
    "empRegId": 0,
    "managerName": string,
    "departmentId": 0,
    "desginationId": 0,
    "remarks": string,
    "managerIds": 0,
    "isActive": true,
    "createdOn": Date,
    "createdBy": string,
    "updatedBy": string,
    "updatedOn": Date
}
//#endregion
//#region Added By Ganesh 28 April 2024
export interface holidaytypetList {

    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,
    holidayTypeId: 0,
    holidayTypeName: string,
    remarks: string

}
//#endregion

//#region Added By Amandeep 05-08-2024
export interface loginDetailsList {
    empRegId: 0,
    userName: string,
    phoneNumber: string,
    email: string,
    userType: 0,
    password: string,
    fullName: string,
    loginId: string,
    roleId: 0,
    maindata: string,
    mainMenu: string,
    mainWithSubMenu: string,
    claim2: string,
    isActive: true,
    createdOn: Date,
    createdBy: string,
    updatedBy: string,
    updatedOn: Date,

}
//#endregion