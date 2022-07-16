import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(1)]],
      password: [null, [Validators.required, Validators.minLength(1)]]
    });
    // this.form = this.fb.group({
    //   name: [null, [Validators.required, Validators.minLength(10)]],
    //   email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    //   dob: [null, [Validators.required]],
    //   address: [null],
    //   country: [null],
    //   gender: [null],
    //   // password: [null, [Validators.required, Validators.minLength(6)]],
    //   // confirmPassword: [null, [Validators.required]],
    // });
  }

  // saveDetails(form: { value: any; }) {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  // }

  onSubmit() {
    this.loginService.GetLogin(this.form.get('username')?.value, this.form.get('password')?.value).subscribe(
      (lol1) => {
        let myResponseString = lol1.toString();
        if (myResponseString != "") {
          localStorage.setItem('username', lol1.toString());
          if (Array.isArray(lol1)) {
            let x: any[] = Object.entries(lol1);
            if (x.length >= 1) {
              localStorage.setItem('username', x[0][1]?.username);
              localStorage.setItem('userId', x[0][1]?.id);
              this.router.navigate(['v']);
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid server response!',
              });
            }
          }
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
