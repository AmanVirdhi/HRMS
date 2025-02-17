// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { AuthService } from 'src/app/core-module/auth-service/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   hide: boolean = true;
//   submitClicked: boolean = false;

//   loginForm: FormGroup = this.fb.group({
//     username: ['', [Validators.required]], // Changed 'email' to 'username'
//     password: ['', [Validators.required]]
//   });
  

//   constructor(private auth: AuthService, private router: Router, private fb: FormBuilder,private toastr: ToastrService) { }

//   ngOnInit(): void {
//     if (this.auth.isLoggedIn()) {
//       this.router.navigate(['main']);
//     }
//   }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       this.submitClicked = false;
      
//       const username = this.loginForm.get('username')?.value;
//       const password = this.loginForm.get('password')?.value;
//       const deviceId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
//       const rememberLogin = true; 
//       const returnUrl = 'string'; 
  
//       this.auth.login(username, password, deviceId, rememberLogin, returnUrl).subscribe(
//         (result) => {
//           console.log(result);
//           if (result.statusCode === 200) {
//             this.router.navigate(['/main']);
//           } else {
//             // Handle unsuccessful login, maybe show an error message
//             //alert(result.message); // Assuming the error message is provided in the result object
//             this.toastr.error(result.message);
//           }
//         },
//         (err: Error) => {
//           //alert(err.message);
//           this.toastr.error(err.message);
          
//         }
//       );
//     } else {
//       this.submitClicked = true;
//  }
//  }

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: '', // No UI for login
  styleUrls: []
})
export class LoginComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/main']); // Redirecting to main page directly
  }
}
