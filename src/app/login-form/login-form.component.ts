import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  users:any
constructor(private router: Router)
{}
ngOnInit()
{
if(localStorage.getItem("etat")=="1")
{
this.router.navigate(['users']);
}
}
  submitForm() {
    const usersData = localStorage.getItem('users');

    this.users = usersData !== null ? JSON.parse(usersData) : [];
    const user = this.users.find((u:any) => u.username === this.username && u.password === this.password);
    if (user) {
    //  alert('Authentification réussie !');
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('etat', "1");

      // Rediriger vers la page contenant le tableau des utilisateurs inscrits
      this.router.navigate(['users']);
    } else {
      alert('Identifiants invalides ! Veuillez réessayer.');
    }
  }

}


