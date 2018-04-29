import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'icon',
	styles: [
		`
      .icon {
      width: 24px;
      height: 24px;
      pointer-events: none;
      }

    .icon--small {
      width: 18px;
      height: 18px;
    }
  `
	],
	template: `
    <svg [attr.class]="'icon icon--' + name + ' ' + className">
      <use [attr.xlink:href]="'#icon-' + name"></use>
    </svg>
  `
})
export class IconComponent {
	@Input() className = ''
	@Input() name: string
}
