import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `   
	<hotkeys-cheatsheet></hotkeys-cheatsheet>  

    <router-outlet></router-outlet>
  `,
	styleUrls: ['./intercept.sass']
})
export class AppComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
