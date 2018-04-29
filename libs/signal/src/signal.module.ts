import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LocalService } from './service/local.service'
import { SignalService } from './service/signal.service'
import { StorageService } from '@signal/storage'

@NgModule({
	imports: [CommonModule],
	providers: [SignalService, LocalService, StorageService]
})
export class SignalModule {}
