import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
//import { ScriptLoaderService } from 'src/assets/js/script-loader.service';
//import { ProsonalDetailsComponent } from './modules/employee/prosonal-details/prosonal-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonComponent } from './modules/common/common.component';
import { FooterComponent } from './modules/common/footer/footer.component';
import { HeaderComponent } from './modules/common/header/header.component';
import { SidebarComponent } from './modules/common/sidebar/sidebar.component';
import { MainComponent } from './modules/main/main.component';
import { MainDashboardComponent } from './modules/main-dashboard/main-dashboard.component';
import { SharedModule } from './shared/shared.module';
import { IgxTimePickerModule, IgxToastModule } from 'igniteui-angular';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader'; 
import { ToastrModule } from 'ngx-toastr';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ApplicationErrorComponent } from './components/application-error/application-error.component';// For Time Picker
import { TokenInterceptorInterceptor } from './modules/master/service/token-interceptor.interceptor';
//import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    LoginComponent,
    NotFoundComponent,
    ApplicationErrorComponent, 
    // CommonComponent,
    // FooterComponent,
    // HeaderComponent,
    // SidebarComponent,
    // MainComponent,
    // MainDashboardComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    IgxTimePickerModule, 
    IgxToastModule,
    //#region  for ui loder
     NgxUiLoaderModule,
      NgxUiLoaderHttpModule.forRoot({
        showForeground: true,
      }), 
      //#endregion 
      //#region ToastrModule added  -- For alert message popup
        // ToastrModule added
      ToastrModule.forRoot({
        positionClass: 'toast-top-right',
   }),
      //#endregion
      //#region Time Picker
        NgxMaterialTimepickerModule,
      //#endregion

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},  // For page refresh the error 404
    //#region added by Amandeep Virdhi on 06-08-2024 for API IN token(authorization)
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }
    //#endregion
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
