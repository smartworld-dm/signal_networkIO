import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `    
    <router-outlet></router-outlet>
  `,
	styleUrls: ['./crtl.styles.scss']
})
export class AppComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
