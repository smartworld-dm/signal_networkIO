import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { CtrlModule } from './app/ctrl.module'
import { environment } from './environments/environment'

if (environment.production) {
	enableProdMode()
}

platformBrowserDynamic()
	.bootstrapModule(CtrlModule)
	.catch(err => console.log(err))
