import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { CtrlPlayerComponent } from './ctrl-player/ctrl-player'
import { CtrlSettingsComponent } from './ctrl-settings/ctrl-settings'

export const routes: Routes = [
	{ path: '', redirectTo: 'player', pathMatch: 'full' },
	{
		path: 'player',
		component: CtrlPlayerComponent,
		data: { animation: 'player' }
	},
	{ path: 'settings', component: CtrlSettingsComponent },
	{ path: '**', redirectTo: 'player' }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
