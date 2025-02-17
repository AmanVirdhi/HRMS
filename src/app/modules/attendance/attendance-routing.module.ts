import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AttendanceSubHeaderComponent } from './attendance-sub-header/attendance-sub-header.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { ApproveRejectComponent } from './approve-reject/approve-reject.component';
import { ManualAttendanceComponent } from './manual-attendance/manual-attendance.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'atteHeader', component: AttendanceSubHeaderComponent,data: { title: 'Attendance/Master' } },
    { path: 'alist', component: AttendanceListComponent,data: { title: 'Attendance/List' } },
    { path: 'empatt', component: EmployeeAttendanceComponent,data: { title: 'Attendance/Employee Attendance' } },
    { path: 'apprej', component: ApproveRejectComponent ,data: { title: 'Attendance/Approve Reject' }},
    { path: 'manual', component: ManualAttendanceComponent ,data: { title: 'Attendance/Manual Attendance' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
