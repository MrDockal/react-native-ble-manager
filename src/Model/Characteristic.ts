import { CharacteristicProperties } from "./CharacteristicProperties";
import { CharacteristicDescriptor } from "./CharacteristicDescriptor";

export interface Characteristic {
	characteristic: string;
	properties: CharacteristicProperties;
	service: string;
	descriptors?: CharacteristicDescriptor[];
}
