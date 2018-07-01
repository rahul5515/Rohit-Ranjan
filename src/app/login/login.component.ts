import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  Username:string = "rohit";
  Password:string="";
  errorMessage:string="";
 

 
  

  constructor(private x: Router) { }

  ngOnInit() {
  }
  Login()
  {
    console.log(this.Username);
   
    if(this.Password == "ranjan" && this.Username=="rohit")
    {
      console.log("Logged In Successfully");
      this.x.navigate(['/Product']);
    }
    else
    {
      this.x.navigate(['/notFound']);
    }
 
    
    

  }

}
