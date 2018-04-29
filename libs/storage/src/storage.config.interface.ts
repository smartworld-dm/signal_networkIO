export interface IStorageServiceConfig {
	// Properties:
	prefix?: string
	storageType?: 'sessionStorage' | 'localStorage'
	mockWebStorage?: Storage
}
