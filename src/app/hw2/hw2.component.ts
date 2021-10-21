import { Component, OnInit } from '@angular/core';
import { IObject } from './obj.interface';

@Component({
  selector: 'app-hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.css']
})

export class Hw2Component implements OnInit {
  public obj: IObject = {
    email: ``,
    login: ``,
    password: ``
  }
  public arrUsers: Array<IObject> = []
  public btnSave = false
  public btnAdd = true
  public newId!: number

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    if (this.obj.email != `` && this.obj.login != `` && this.obj.password != ``) {
      this.arrUsers.push({ ...this.obj })
      this.reset()
    }
  }

  delete(i: number): void {
    this.arrUsers.splice(i, 1)
  }

  edit(i: number): void {
    this.obj.login = this.arrUsers[i].login
    this.obj.password = this.arrUsers[i].password
    this.obj.email = this.arrUsers[i].email
    this.btnAdd = false
    this.btnSave = true
    this.newId = i
  }

  reset(): void {
    this.obj.email = ``
    this.obj.login = ``
    this.obj.password = ``
  }

  save() {
    if (this.obj.login != `` && this.obj.password != `` && this.obj.email != ``) {
      this.arrUsers[this.newId].login = this.obj.login
      this.arrUsers[this.newId].password = this.obj.password
      this.arrUsers[this.newId].email = this.obj.email
      this.reset()
      this.btnAdd = true
      this.btnSave = false
    }

  }

}
