import { Injectable } from '@angular/core';
import {Model} from '../helper/contact-model'

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  public contectList: Model[] = [
    {id:1, firstName: "Himanshi",lastName: "Kansara", email:"himanshikansara@gmail.com", phoneNo:"7896541336", status:"Active"},
    {id:2, firstName: "Priyansh",lastName: "Mishra", email:"priyanshmishra@gmail.com", phoneNo:"7896541336", status:"Active"},
    {id:3,firstName: "Manisha",lastName: "Gehlot", email:"manishGehlot@gmail.com", phoneNo:"7896541336", status:"Inactive"}
];
  constructor() { }
}
