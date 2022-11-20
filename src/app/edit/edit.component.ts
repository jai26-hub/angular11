import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customers/cust';
import { ServiceapiService } from '../serviceapi.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
obj:Customer=new Customer();
  arr1:Customer[]=[];
  custForm:FormGroup|any;
  crudForm:FormGroup | undefined;
  constructor(public d:ServiceapiService,public router:Router,public formBuilder:FormBuilder) {
    this.arr1=this.d.arr;  //last ah edit la new ah chnge panuna value arr1 la assign aagu array ku
   
  }

  ngOnInit() {

  }
  onSubmit(){
    this.router.navigate(['/customer']) ;//edit page la add btn click panunacustomer route aaguthu
  }
Delete(i:number){
this.arr1.splice(i,1);
}

}
