import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validate-number',
  templateUrl: './validate-number.component.html',
  styleUrls: ['./validate-number.component.less']
})
export class ValidateNumberComponent implements OnInit {
  validateForm =  new FormGroup ({
    phoneNumber: new FormControl(['', [ Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]])
  });
  submitted = false;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /*this.validateForm = this.formBuilder.group({
      phoneNumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]]
    });*/
  }

  navToPagination()
  {
    this.router.navigate(['/pagination']);
  }

  get f()
  {
    return this.validateForm.controls;
  }

  onSubmit() {
    console.log('phone number ------ ', this.validateForm.get('phoneNumber').value);
    this.submitted = true;
    if (this.validateForm.invalid) {
        return;
    }
  }

  validateNumber(event, val: string) {
    if (val.length > 9)
    {
      event.preventDefault();
    }
    const keycode = event.which;
    if (!(event.shiftKey === false && (keycode === 46 || keycode === 8 || keycode === 37 
      || keycode === 39 || (keycode >= 48 && keycode <= 57)))) {
        event.preventDefault();
    }
  }

  submit()
  {
    console.log('phone number ------ ', this.validateForm.get('phoneNumber').value);
  }

}