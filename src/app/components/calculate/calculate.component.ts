import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  reactive_calcform;
  constructor() { }

  ngOnInit(): void {
    this.reactive_calcform = new FormGroup(
      {
        cand_name: new FormControl(),
        cand_dob: new FormControl(),
        cand_id: new FormControl(),
        cand_func: new FormControl(),
        cand_exp: new FormControl(),
        cand_reg: new FormControl()
      }
    )
  }

}
