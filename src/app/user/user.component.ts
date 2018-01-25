import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl:'./user.component.html',
	styleUrls:['./user.component.css']
})

export class UserComponent{

	@Input() user;

	isMarked = false;

	onClick(){
		if(this.isMarked){
			this.isMarked = false
		}else{
			this.isMarked = true;
		}
	}
}