import { NgModule, Provider } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconButtonComponent } from './icon-button'
import { IconComponent } from './icon'
import { FormatTimePipe, FormatVolumePipe } from './pipes'
import { DotComponent } from './dot'

export function coreDirectives() {
	return [IconButtonComponent, IconComponent, FormatTimePipe, DotComponent, FormatVolumePipe]
}

export function coreServices(): Provider[] {
	return []
}

@NgModule({
	imports: [CommonModule],
	declarations: coreDirectives(),
	exports: coreDirectives(),
	providers: coreServices()
})
export class CoreModule {}
