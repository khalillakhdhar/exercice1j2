import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  username: string = '';
  email: string = '';
  password: string = '';
users:any;
constructor(private router:Router)
{

}
  submitForm() {
    const usersData = localStorage.getItem('users');

    this.users = usersData !== null ? JSON.parse(usersData) : [];




    this.users.push({username:this.username,email:this.email,password:this.password});
    localStorage.setItem('users', JSON.stringify(this.users));
    //alert('Inscription réussie !');
    this.router.navigate(['login']);

    // Rediriger vers la page de connexion
  }
}
