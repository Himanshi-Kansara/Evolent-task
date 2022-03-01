import { Component, OnInit, Input } from '@angular/core';
import {Model} from './helper/contact-model';
import {ContactServiceService} from './helper/contact-service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public userContact:Model[] = []; 
  public userdata:Model;
  public isedit = false;
  constructor(public contactsService: ContactServiceService) { }

  ngOnInit(): void {
    this.userContact = this.contactsService.contectList;
  }

  //------ Edit user info
  public onClickEdit(data:Model){
    this.userdata = Object.assign({}, data);
    this.isedit = true;
  }

  //--------- Delete User
  public onClickDelete(index){
    this.userContact = [];
    this.userContact = this.contactsService.contectList;
    this.userContact.splice(index, 1);
  }

  //--------update list of user
  public getEditContact(data:Model){
    this.userContact.forEach((x,i)=>{
      if(x.id === data.id){
          this.userContact[i] = {...data};
      }
    });
    this.isedit = false;
  }

  //-----------active or deactive user
  public toggleForActive(index, status){
    this.userContact[index].status = status;
  }

  //-------- add user in existing list
  public getContactData(data:Model){
   let lastid = this.userContact[this.userContact.length -1].id;
   data.id = lastid+1;
   this.userContact.push(data);
   console.log(this.userContact)
  }
}
