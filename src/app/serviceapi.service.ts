import { Injectable } from '@angular/core';
import { Customer } from './customers/cust';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {

  arr:Customer[]=[];

 constructor() { }
}
