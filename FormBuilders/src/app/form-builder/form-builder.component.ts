import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  form!:FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.form.value)
  }

}
