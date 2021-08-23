import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import {AuthModule} from '@auth0/auth0-angular'
// import { environment as env } from 'src/environments/environment';


const appRoutes : Routes = [
  {path: '', component: EmployeesComponent},
  {path: 'about', component: AboutComponent},
  {path:'**',redirectTo:''}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EmployeesComponent,
    EmployeeItemComponent,
    AddEmployeeComponent,
    AboutComponent,
    FooterComponent,
    PaginationComponent,
    EditEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing:true}),
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SocialLoginModule,
    // AuthModule.forRoot({
    //   ...env.auth,
    // })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1053587746022-iqbbl6usc39409mnseiikr0j8u5g5pdb.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
