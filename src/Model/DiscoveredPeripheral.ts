import { Advertising } from "./Advertising";
import { Peripheral } from "./Peripheral";

export interface DiscoveredPeripheral extends Peripheral {
	advertising: Advertising;
}
