import { Moment } from 'moment'

export interface IStorageServicePayload {
	key: string
	user?: string
	value: any
	timestamp: Moment
}
