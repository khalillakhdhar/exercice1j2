import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[] = [];
me:any;

  constructor(private router: Router) {

  }
ngOnInit(): void {
  if(localStorage.getItem("etat")=="0")
  {
  this.router.navigate(['login']);
  }
let us=localStorage.getItem("user");
this.me=JSON.parse(us|| '');
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getUsers();

}
  getUsers() {

    this.users = JSON.parse(localStorage.getItem('users')|| "") || [];
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.setItem("etat","0");
// changement de context
    // Rediriger vers la page de connexion
    window.location.replace("login");
  }
  delete(id:any)
  {
    if(confirm("êtes vous sûre de vouloir supprimer l'utilisateur numéro "+id))
    {
    this.users.splice(this.users.indexOf(id), 1);
    localStorage.setItem("users",JSON.stringify(this.users))
    }
  }
}
