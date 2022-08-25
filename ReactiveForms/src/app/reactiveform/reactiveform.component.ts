import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
title:string = "REACTIVE FORM"
form!:FormGroup
level=['beginner', 'intermediate','pro','pro-max']


  ngOnInit(): void {
    // console.log(this.removeitem(arr[], index));
    // JSON.parse(this.num)
    this.form = new FormGroup({
      username: new FormControl('daniel',Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      language: new FormControl(null,[Validators.required]),
      level: new FormControl(null,[Validators.required]),
      address: new FormGroup({
        country: new FormControl(null,[Validators.required]),
        region: new FormControl(null,[Validators.required]),
        county: new FormControl(null,[Validators.required])
      }),
      hobbies: new FormArray([]),
      skills: new FormArray([])
    })
  }

  onSubmit(){
    console.log(this.form);
  }
  addHobby(){
    const control = (new FormControl(null, Validators.required));
    ((this.form.get('hobbies')) as FormArray).push(control)
  }

  getHobby(){
    return (this.form.get('hobbies') as FormArray).controls
  }
  removeHobby(i : number){
    return (this.form.get('hobbies') as FormArray).removeAt(i)
  }
  addSkill(){
    const control = new FormControl(null,Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }

  getSkills(){
    return ((this.form.get('skills')) as FormArray).controls
  }
  removeSkill(i: number){
    return ((this.form.get('skills')) as FormArray).removeAt(i)
  }
}
