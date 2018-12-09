import { ManufacturerData } from "./ManufacturerData";

export interface Advertising {
	isConnectable: boolean;
	localName: string;
	manufacturerData: ManufacturerData;
	serviceUUIDs: string[];
	txPowerLevel: number;
}
