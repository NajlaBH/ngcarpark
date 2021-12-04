import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  })
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  
  login(){
    const data = this.loginForm.value;

    console.log(data);

    if (data.username === 'admin' && data.password === 'admin') {
      // ok !
      console.log("ok");

      localStorage.setItem('SomeTokenToGet',''+new Date().getTime());
      this.router.navigateByUrl('/home');
      
    }else{
      console.log("wrong username or password");
      
    }
    
  }
}
