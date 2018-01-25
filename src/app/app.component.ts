import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
	users = [];
	constructor(private usersService: UserService){}

	ngOnInit(){
		//this.users = this.usersService.users;
		this.usersService.getUsers().subscribe(users => {
			console.log(users);
			this.users = users;
		})
	}
  
}
