import { NgModule } from '@angular/core'
import { AppComponent } from './component'
import { BrowserModule } from '@angular/platform-browser'
import { NxModule } from '@nrwl/nx'
import { RouterModule } from '@angular/router'
import { RoutingModule } from "./routing";
import { SourcesTabComponent } from "./sources-tab/sources-tab.component";
import { SettingsTabComponent } from "./settings-tab/settings-tab.component";
import { TracksTabComponent } from "./tracks-tab/tracks-tab.component";
import { NavigationComponent } from "./navigation/navigation";
import { ControlsComponent } from "./controls/controls";
import { PlayerComponent } from "./player/player.component";
import { VgBufferingModule } from "@signal/player/src/buffering/buffering";
import { VgControlsModule } from "@signal/player/src/controls/controls";
import { VgCoreModule } from "@signal/player/src/core/core";
import { SignalService } from "@signal/signal";
import { SocketIoConfig, SocketIoModule } from "ng-socket-io";
import { environment } from "@signal/environments/environtment";
import { FlexLayoutModule } from "@angular/flex-layout";


const config: SocketIoConfig = { url: environment.socket.baseUrl, options: environment.socket.opts }

@NgModule({
	imports: [BrowserModule,
    NxModule.forRoot(),
    RoutingModule,
    VgCoreModule,
    VgControlsModule,
    // FlexLayoutModule,
    SocketIoModule.forRoot(config),
    VgBufferingModule
  ],
	declarations: [AppComponent,
    SourcesTabComponent,
    SettingsTabComponent,
    TracksTabComponent,
    NavigationComponent,
    ControlsComponent,
    PlayerComponent],
  providers: [SignalService],
	bootstrap: [AppComponent]
})
export class AppModule {}
