import { Component } from '@angular/core';
import { UserService } from './user.service';
import { ProdService } from './prod.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, ProdService]
})
export class AppComponent {
	clicks = 0;
	users = [];
	prods = [];
	constructor(private usersService: UserService, private prodService : ProdService){}
	ngOnInit(){
		//this.users = this.usersService.users;
		this.usersService.getUsers().subscribe(users => {			
			this.users = users;
		})
		this.prods = this.prodService.getProds()
		console.log(this.prods)
	}
  
}
