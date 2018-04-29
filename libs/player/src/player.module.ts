import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SignalEvents } from './core/events/vg-events'
import { VgBufferingModule } from './buffering/buffering'
import { VgCoreModule } from './core/core'
import { VgControlsModule } from './controls/controls'
import { VgOverlayPlayModule } from './overlay-play/overlay-play'
import { VgStreamingModule } from './streaming/streaming'
import { CoreModule } from '@signal/core'

export function playerModules() {
	return [CommonModule, CoreModule, VgControlsModule, VgOverlayPlayModule, VgStreamingModule, VgBufferingModule]
}

export function playerProviders() {
	return [
		// SignalEvents
	]
}

@NgModule({
	imports: playerModules(),
	providers: playerProviders()
})
export class PlayerModule {}
