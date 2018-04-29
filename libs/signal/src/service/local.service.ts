import { Injectable } from '@angular/core'
import { StorageService } from '@signal/storage'

@Injectable()
export class LocalService {
	node_id: string

	constructor(private storage: StorageService) {
		// this.node_id = this.storage.retrieve('username')
		//
		// this.storage.observe('node_id').subscribe(value => (this.node_id = value))
	}
}
