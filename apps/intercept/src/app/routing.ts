import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { RcvrPlayerComponent } from './intercept/intercept'
import { RcvrSettingsComponent } from './settings/rcvr-settings'

export const routes: Routes = [
	{ path: '', redirectTo: 'player', pathMatch: 'full' },
	{
		path: 'player',
		component: RcvrPlayerComponent,
		data: { animation: 'player' }
	},
	{ path: 'settings', component: RcvrSettingsComponent },
	{ path: '**', redirectTo: 'player' }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
