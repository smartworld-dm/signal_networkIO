import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppComponent } from './component'
import { BrowserModule } from '@angular/platform-browser'
import { NxModule } from '@nrwl/nx'
import { PlayerModule } from '@signal/player'
import { RoutingModule } from './routing'
import { RcvrPlayerComponent } from './intercept/intercept'
import { RcvrSettingsComponent } from './settings/rcvr-settings'
import { VgCoreModule } from '@signal/player/src/core/core'
import { VgBufferingModule } from '@signal/player/src/buffering/buffering'
import { VgOverlayPlayModule } from '@signal/player/src/overlay-play/overlay-play'
import { VgControlsModule } from '@signal/player/src/controls/controls'

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io'
import { SignalService } from '@signal/signal'
import { environment } from '@signal/environments/environtment'
import { CoreModule } from '@signal/core'
import { AppSettingsService } from './intercept/settings'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { PlayerComponent } from './intercept/player'

import {NgxElectronModule} from 'ngx-electron';

import { HotkeyModule, HotkeysService } from 'angular2-hotkeys';



const config: SocketIoConfig = { url: environment.socket.baseUrl, options: environment.socket.opts }

export function rcvrDeclarations() {
	return [AppComponent, RcvrPlayerComponent, PlayerComponent, RcvrSettingsComponent]
}

export function rcvrProviders() {
	return [SignalService, AppSettingsService, HotkeysService]
}

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		CoreModule,
		PlayerModule,
		VgCoreModule,
		VgOverlayPlayModule,
		VgBufferingModule,
		VgControlsModule,
		HttpClientModule,
		FormsModule,
		RoutingModule,
    NgxElectronModule,
		NxModule.forRoot(),
    HotkeyModule.forRoot(),
		SocketIoModule.forRoot(config)
	],
	declarations: rcvrDeclarations(),
	providers: rcvrProviders(),
	bootstrap: [AppComponent]
})
export class AppModule {}
