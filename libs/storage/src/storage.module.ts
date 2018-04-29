import { ModuleWithProviders, NgModule } from '@angular/core'

import { StorageService } from './storage.service'
import { IStorageServiceConfig } from './storage.config.interface'

@NgModule({
	providers: [StorageService]
})
export class StorageModule {
	static withConfig(userConfig: IStorageServiceConfig = {}): ModuleWithProviders {
		return {
			ngModule: StorageModule,
			providers: [{ provide: 'WEB_STORAGE_SERVICE_CONFIG', useValue: userConfig }]
		}
	}
}
