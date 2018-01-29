import { Component, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	i;
	ngOnInit(){this.i=1;}
	next(){
		this.i++;	
	}
	back(){
		this.i--;
	}
}