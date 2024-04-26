import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'lib-sitejobapplication',
  templateUrl: `./sitejobapplication.component.html`,
  styleUrl: `./sitejobapplication.component.scss`
})
export class SitejobapplicationComponent implements OnInit{

  @Output() jobformsubmitted: EventEmitter<any> = new EventEmitter();

  named!: string;
  jobForm!: FormGroup;
  formErrors: {
    [key: string]: boolean;
  } = {
    firstnameError: false,
    resumeError: false,
    resumerequiredError: false,
    resumeValidError: false,
    mobilenumberRequiredError: false,
    mobilenumberValidError:false,
    userEmailRequiredError: false,
    userEmailValidError: false,
    messagetextError: false,
  };
  validmsg!: boolean;

  ngOnInit(): void {

    this.jobForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      
      useremail: new FormControl('', [Validators.required, Validators.email]),
      messagetext: new FormControl('', [Validators.required]),
      mobilenumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      resume: new FormControl(null, [Validators.required, this.fileTypeValidator(['pdf', 'doc', 'docx'])]),
    });

  }

  fileTypeValidator(allowedTypes: string[]) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const file = control.value;
      console.log(file);

      if (file instanceof File) {
          const fileName: string = file.name.toLowerCase();
          const fileType: any = fileName.split('.').pop();

          if (allowedTypes.indexOf(fileType) === -1) {
              return { 'invalidFileType': true };
          }
      }

        return null;
    };
}

submit() {
  console.log("submitted")
  Object.keys(this.formErrors).forEach((key) => (this.formErrors as any)[key] = false);

  this.validmsg = false;

  for (const control in this.jobForm.controls) {
    if (control !== 'useremail' && control !== 'mobilenumber' && control !== 'resume' && this.jobForm.get(control)?.invalid) {
      this.formErrors[control + 'Error'] = true;
    }
  }

  const useremailControl = this.jobForm.get('useremail');
  if (!useremailControl?.value) {
    this.formErrors['userEmailRequiredError'] = true;
  } else if (useremailControl.touched && useremailControl.invalid) {
    this.formErrors['userEmailValidError'] = true;
  }

  // Add validation for mobile number control
  const mobilenumberControl = this.jobForm.get('mobilenumber');
  if (!mobilenumberControl?.value) {
    this.formErrors['mobilenumberRequiredError'] = true;
  } else if (mobilenumberControl.touched && mobilenumberControl.invalid) {
    this.formErrors['mobilenumberValidError'] = true;
  }

  const resumeControl = this.jobForm.get('resume');

  if (!resumeControl?.value) {
    this.formErrors['resumerequiredError'] = true;
  } else if (resumeControl.touched && resumeControl.invalid){
    this.formErrors['resumeValidError'] = true;
  }
  console.log(this.named);
  console.log(this.jobForm)
  console.log(this.jobForm.valid);
  if (this.jobForm.valid) {
    console.log(this.named);
    this.validmsg = true;
    console.log(this.jobForm.value);
    this.jobformsubmitted.emit(this.jobForm.value);
    this.jobForm.reset();
  }
}


}
