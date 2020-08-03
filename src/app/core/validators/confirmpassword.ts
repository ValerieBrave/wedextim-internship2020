import { Directive } from '@angular/core';
import { NgForm, NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';
import { ValidationErrors, FormGroup, ValidatorFn } from "@angular/forms";


export const passwordValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get("password").value;
  const confirmPassword = control.get("password_rep").value;
  //control.get("password_rep")
  return password && confirmPassword && password === confirmPassword
    ? null
    : { passwordsNotEqual: true };
};


// @Directive({
//   selector: '[pass_valid][ngModel]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: ConfirmPass,
//       multi: true
//     }
//   ]

// })
// export class ConfirmPass implements Validator {

//   passes_equal(pass1: string, pass2: string) : boolean{ 
//     return pass1 === pass2;
//   }

//   validate(formControl: AbstractControl): ValidationErrors {
//     if(formControl.value === '3'){
//         return {vali: { error: 'vali'}}
//     }
//     return null;
//   };
// }