import { ManufacturerData } from "./ManufacturerData";

export type Advertising = AdvertisingAndroid | AdvertisingIOS;

export interface AdvertisingAndroid {
	isConnectable: boolean;
	localName: string;
	manufacturerData: ManufacturerData;
	serviceUUIDs: string[];
	txPowerLevel: number;
}

export interface AdvertisingIOS {
	kCBAdvDataChannel: number;
	kCBAdvDataIsConnectable: number;
	kCBAdvDataLocalName: string;
	kCBAdvDataManufacturerData: ManufacturerData;
}