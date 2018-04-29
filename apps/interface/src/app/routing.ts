import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {SourcesTabComponent} from './sources-tab/sources-tab.component';
import {SettingsTabComponent} from './settings-tab/settings-tab.component';
import {TracksTabComponent} from './tracks-tab/tracks-tab.component';
// import { CtrlPlayerComponent } from './ctrl-player/ctrl-player'
// import { CtrlSettingsComponent } from './ctrl-settings/ctrl-settings'
// import {InterfaceComponent} from './interface/interface.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tracks', pathMatch: 'full' },
  {
    path: 'tracks',
    component: TracksTabComponent,
    data: { animation: 'player' }
  },
  { path: 'sources', component: SourcesTabComponent },
  { path: 'settings', component: SettingsTabComponent },
  { path: '**', redirectTo: 'player' }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
