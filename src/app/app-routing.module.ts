import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMessComponent } from './a-admin/admin-mess/admin-mess.component';
import { Admin_feesComponent } from './a-admin/admin_fees/admin_fees.component';
import { Admin_leaveComponent } from './a-admin/admin_leave/admin_leave.component';
import { Admin_roomComponent } from './a-admin/admin_room/admin_room.component';
import { LeaveformComponent } from './a-admin/leaveform/leaveform.component';
import { LoginCredentialsComponent } from './a-admin/login-credentials/login-credentials.component';
import { StudentsProfileComponent } from './a-admin/students-profile/students-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminCredComponent } from './admin-cred/admin-cred.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HomeComponent } from './home/home.component';
import { Home3Component } from './home3/home3.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './a-user/profile/profile.component';
import { RoomComponent } from './a-user/room/room.component';
import { MessComponent } from './a-user/mess/mess.component';
import { FeesComponent } from './a-user/fees/fees.component';
import { LeaveComponent } from './a-user/leave/leave.component';
import { RoomExchangeComponent } from './a-user/room/room-exchange/room-exchange.component';
import { MyroomComponent } from './a-user/room/myroom/myroom.component';
import { LeaveDetailsComponent } from './a-user/leave/leave-details/leave-details.component';
import { MessMenuComponent } from './a-user/mess/mess-menu/mess-menu.component';
import { MessTimeComponent } from './a-user/mess/mess-time/mess-time.component';
import { LeaveHolidayComponent } from './a-user/leave/leave-holiday/leave-holiday.component';
import { AdminDashComponent } from './a-admin/admin-dash/admin-dash.component';
import { VacatingComponent } from './a-admin/vacating/vacating.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: Home3Component },
  { path: 'Home', component: Home3Component },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactUsComponent },

  { path: 'registerform', component: AdminCredComponent },

  { path: 'forgot', component: ForgotComponent },
  // sidebar

  { path: 'logcred', component: AdminCredComponent, canActivate: [AuthGuard] },
  {
    path: 'Profile',
    component: StudentsProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Room', component: Admin_roomComponent, canActivate: [AuthGuard] },
  { path: 'Fees', component: Admin_feesComponent, canActivate: [AuthGuard] },
  {
    path: 'leaveform',
    component: Admin_leaveComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Mess', component: AdminMessComponent, canActivate: [AuthGuard] },
  {
    path: 'admincret',
    component: AdminCredComponent,
    canActivate: [AuthGuard],
  },
  { path: 'vacate', component: VacatingComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: Home3Component, canActivate: [AuthGuard] },
  // logout
  //-user
  { path: 'logcred', component: AdminCredComponent, canActivate: [AuthGuard] },
  {
    path: 'Profile-user',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Room-user', component: RoomComponent, canActivate: [AuthGuard] },
  { path: 'Fees-user', component: FeesComponent, canActivate: [AuthGuard] },
  {
    path: 'leaveform-user',
    component: LeaveComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Mess-user', component: MessComponent, canActivate: [AuthGuard] },

  //button My-room
  { path: 'My-room', component: MyroomComponent, canActivate: [AuthGuard] },
  {
    path: 'leave-Check',
    component: LeaveDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Mess-menu', component: MessMenuComponent, canActivate: [AuthGuard] },
  { path: 'mess-time', component: MessTimeComponent, canActivate: [AuthGuard] },
  {
    path: 'exchange-room',
    component: RoomExchangeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'holiday',
    component: LeaveHolidayComponent,
    canActivate: [AuthGuard],
  },
  { path: 'dash', component: AdminDashComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
