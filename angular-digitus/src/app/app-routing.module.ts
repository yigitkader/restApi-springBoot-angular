import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { RenewpasswordComponent } from './renewpassword/renewpassword.component';
import { AdminsignupComponent } from './auth/adminsignup/adminsignup.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthGuard } from './auth/auth.guard'


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"sign-up",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"forgot-password",component:ForgotpasswordComponent},
  {path:"admin-signup",component:AdminsignupComponent},
  {path:"adminpage",component:AdminpageComponent,canActivate:[AuthGuard]},
  {path:"",redirectTo:'home', pathMatch:'full'},
  {path:"renew-password/:token",component:RenewpasswordComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
