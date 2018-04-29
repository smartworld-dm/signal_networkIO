import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'dot',
	template: `<div class="dot"><ng-content></ng-content></div>`,
	styles: [
		`
    .dot {

      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: #FFF;
      color: rgba(65,50,63,0.725);
      min-width: 1em;
      border-radius: 10%;
      vertical-align: middle;
      padding: 1.2rem;
      font-family: monospace;
      cursor: pointer;
      font-size: 16px;
      
      
    }

    .dot:before {
      content:'';
      float: left;
      width: auto;
      padding-bottom: 100%;
    }
    .dot:hover {
      color: #FFF;
      background-color: #242424;
      
    }
    
  `
	]
})
export class DotComponent implements OnInit {
	@Input() input

	constructor() {}

	ngOnInit() {}
}
