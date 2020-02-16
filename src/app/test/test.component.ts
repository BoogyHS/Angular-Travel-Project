import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectCountry: ['', [Validators.required]],
      selectCity: ['', [Validators.required]],
      field: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  test() {
    console.log(this.form)
  }

  ngOnChanges(form: SimpleChanges) {

  }
}
