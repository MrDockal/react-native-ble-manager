import { Service } from "./Service";
import { Advertising } from "./Advertising";
import { Peripheral } from "./Peripheral";
import { Characteristic } from "./Characteristic";

export interface PeripheralInfo extends Peripheral {
	advertising: Advertising;
	characteristics: Characteristic[];
	services: Service[];
}
