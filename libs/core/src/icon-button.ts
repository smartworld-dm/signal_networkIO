import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core'

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'icon-button',
	styles: [
		`
    .btn--icon {
      border-radius: 100%;
      padding: 8px;
      width: 40px;
      height: 40px;
    }
  `
	],
	template: `
    <button
      [attr.aria-label]="label"
      class="btn btn--icon btn--{{icon}} {{className}}"
      (click)="onClick.emit($event)"
      type="button">
      <icon [name]="icon"></icon>
    </button>
  `
})
export class IconButtonComponent {
	@Input() className: string
	@Input() icon: string
	@Input() label: string

	@Output() onClick = new EventEmitter(false)
}
