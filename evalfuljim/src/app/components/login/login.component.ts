import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserViewModel } from 'src/app/interfaces/auth/authViewModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm !: LoginFormGroup;
  constructor(private authService: AuthService, private route: Router) {
    this.LoginForm = new LoginFormGroup(<UserViewModel>{});
  }

  ngOnInit(): void {
  }
  onSubmit() {

    this.authService.Auth(this.LoginForm.value).subscribe(response => {
      if (response && response.Success) {
        this.route.navigateByUrl('dashboard');
      } else {
        alert(response.ErrorMessage);
      }
    });
  }
}
export class LoginFormGroup extends FormGroup {
  readonly User = this.get('User') as FormControl;
  readonly Password = this.get('Password') as FormControl;
  constructor(private readonly model: UserViewModel, private readonly fb = new FormBuilder()) {
    super(fb.group(
      {

        User: [model?.user, [Validators.required]],
        Password: [model?.password, [Validators.required]],


      }
    ).controls);
  }
}
