import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Model } from '../helper/contact-model';
@Component({
  selector: 'app-edit-or-add',
  templateUrl: './edit-or-add.component.html',
  styleUrls: ['./edit-or-add.component.scss']
})
export class EditOrAddComponent implements OnInit {
  @Input() user: Model;
  @Input() isEdit: boolean;
  @Output() addEditContact = new EventEmitter<Model>();
  @Output() addContact = new EventEmitter<Model>();

  constructor() {}

  ngOnInit(): void {
    this.user = {
      id: 0,
      email: '',
      firstName: '',
      lastName: '',
      phoneNo: '',
      status: ''
    };
  }

  //---submit edited or add contact form
  public onClickSubmit(form:NgForm) {
    if (this.isEdit) {
      this.addEditContact.emit(this.user);
    } else {
      this.addContact.emit(this.user);
    }
    this.onClickCancel();
    form.reset();
  }

   //---reset form
  public onClickCancel() {
    this.user = {
      id: 0,
      email: '',
      firstName: '',
      lastName: '',
      phoneNo: '',
      status: ''
    };
    this.isEdit =false;
  }
}
