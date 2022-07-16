import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(1)]],
      password: [null, [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
    this.signupService.CreateLogin(this.form.get('username')?.value, this.form.get('password')?.value).subscribe(
      (lol1) => {
        let myResponseString = lol1.toString();
        if (myResponseString != "") {
          this.router.navigate(['l']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username and password!',
          });
        }
      },
      (lol2) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }

}
