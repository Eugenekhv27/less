import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable();
export class UserService {


	constructor(private http: Http){}

	getUsers(){
		return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb');
	}
	users = [
  	{name: 'WFN 1'},
  	{name: 'WFN 2'},
  	{name: 'WFN 3'},
  	{name: 'WFN 4'}
  ]
}