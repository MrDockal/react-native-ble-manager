export interface BleManagerDidUpdateValueForCharacteristic {
	characteristic: string;
	peripheral: string;
	service: string;
	value: number[];
}
