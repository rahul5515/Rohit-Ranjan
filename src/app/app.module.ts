import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

  

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{ProfileComponent}from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CareerComponent } from './career/career.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: 'Product', component: ProfileComponent},
  { path: '', component: LoginComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: 'Assignment', component: AssignmentComponent },
  { path: 'Approval', component: ApprovalsComponent },
  { path: 'Career', component: CareerComponent },
  { path: 'Logout', component: LoginComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,ProfileComponent,NotFoundComponent, AssignmentComponent, CareerComponent, ApprovalsComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
