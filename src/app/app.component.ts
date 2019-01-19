import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Login} from '../models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
   login: any;
constructor() {
  // this.login = this.CreateForm(formBuilder);
}
 // CreateForm(formBuilder: FormBuilder) {
//  return new FormGroup({
//     userName: new FormControl('', Validators.required),
//     password: new FormControl('', Validators.required)
//  });
// return formBuilder.group(new Login());
 // }
  onSubmit(test: any) {
    // if (this.login.status.toLocaleLowerCase() === 'invalid') {
    //   alert('Please fill the required filleds');
    //   console.log(this.login);
    //   return ;
    // }
// if (this.login.value['userName'] === 'Rajesh' && this.login.value['password'] === 'Rajesh') {
// console.log(this.login);
// }

 // console.log("test:"+test.userName+" " + test.password);
  }
   ngOnInit() {}
}
