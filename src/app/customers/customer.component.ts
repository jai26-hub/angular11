import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceapiService } from '../serviceapi.service';
import { Customer } from './cust';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit
{
  customerForm:FormGroup|any;
  submitted = false;
  // arr:Customer[]=[];
arrcust:any;
  id:any;
  isEdit: boolean | undefined;
  obj:Customer=new Customer();
   //url="http://localhost:4200/api/reg";
 
index:any;
  constructor(public r:ActivatedRoute,public http: HttpClient,public route:Router,public d:ServiceapiService,public formBuilder:FormBuilder) {
    this.id =  this.r.snapshot.paramMap.get("id");
    if(this.id != null){
      this.arrcust=this.d.arr;
      this.obj.amount = this.arrcust[this.id].amount ;    //index value ah amountitennameku assgn panuthu. 
      this.obj.item = this.arrcust[this.id].item ;
      this.obj.name = this.arrcust[this.id].name;
      console.log(this.id);
      this.isEdit=true;
      }
  }

  ngOnInit() {
    this.customerForm=this.formBuilder.group({
      // name: ['', [Validators.required, Validators.minLength(4),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      // Validators.pattern("[ a-zA-Z]*"),
      name: ['', [Validators.required ]],
        // pattern("[a-zA-Z][a-zA-Z ]+")]],
      amount:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
   
      item: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }
get errorCtr() {  
  return this.customerForm.controls;
}
onSubmit(){
  this.submitted=true;

    
  if(this.isEdit){

    this.arrcust[this.id] = this.obj; //edit na obj la old value ah arry la id la eduku//
    this.obj=new Customer();
    this.route.navigate(['/edit']);

  } else if(this.obj.amount&&this.obj.item&&this.obj.name) //all field added
  {
    this.d.arr.push(this.obj)  
    this.obj=new Customer();
    this.route.navigate(['/edit']);
    console.log("Login successful");

  }
  else{
    console.log(this.customerForm.value);

  }
}

// check(e:any){
  
// }

}