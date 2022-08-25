import { Component, OnInit } from '@angular/core';
interface data{
  username:string
  email:string
  country:string
  region:string
  district:string
  phone:number
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  }

  create(item:data){
    console.log(item);
    
  }
}
