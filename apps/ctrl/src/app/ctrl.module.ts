import { NgModule } from '@angular/core'
import { AppComponent } from './crtl.component'
import { BrowserModule } from '@angular/platform-browser'
import { NxModule } from '@nrwl/nx'
import { CtrlPlayerComponent } from './ctrl-player/ctrl-player'
import { CtrlSettingsComponent } from './ctrl-settings/ctrl-settings'
import { RoutingModule } from './ctrl.routing'
import { VgCoreModule } from '@signal/player/src/core/core'
import { PlayerModule } from '@signal/player'
import { VgBufferingModule } from '@signal/player/src/buffering/buffering'
import { VgOverlayPlayModule } from '@signal/player/src/overlay-play/overlay-play'
import { CommonModule } from '@angular/common'
import { VgControlsModule } from '@signal/player/src/controls/controls'
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io'
import { SignalService } from '@signal/signal'

import { CoreModule } from '@signal/core'
import { environment } from '@signal/environments/environtment'

const config: SocketIoConfig = { url: environment.socket.baseUrl, options: environment.socket.opts }

export function ctrlDeclarations() {
	return [AppComponent, CtrlPlayerComponent, CtrlSettingsComponent]
}

export function ctrlProviders() {
	return [SignalService]
}

@NgModule({
	imports: [
		BrowserModule,
		NxModule.forRoot(),
		CommonModule,
		PlayerModule,
		VgCoreModule,
		CoreModule,
		VgOverlayPlayModule,
		VgBufferingModule,
		VgControlsModule,
		RoutingModule,
		SocketIoModule.forRoot(config)
	],
	declarations: ctrlDeclarations(),
	providers: ctrlProviders(),
	bootstrap: [AppComponent]
})
export class CtrlModule {}
