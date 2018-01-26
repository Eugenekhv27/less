import { Component, Input } from '@angular/core';


@Component({
	selector: 'app-prod',
	templateUrl: './prod.component.html',
	styleUrls:['./prod.component.css']
})


export class ProdComponent{
	@Input() prod;	
	isBoth = false;

	pres(){
		if(this.isBoth){
			this.isBoth = false;	
		}else{
			this.isBoth = true;
		}
		

	}


}