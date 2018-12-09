import { NativeModules } from 'react-native';
import { PeripheralInfo } from './Model/PeripheralInfo';
import { StartOptions } from './Model/StartOptions';
import { ScanningOptions } from './Model/ScanningOptions';
import { BondedPeripheral } from './Model/BondedPeripheral';
import { ConnectionPriority } from './Model/ConnectionPriority';
import { DiscoveredPeripheral } from './Model/DiscoveredPeripheral';
import { Advertising } from './Model/Advertising';
import { Characteristic } from './Model/Characteristic';
import { CharacteristicDescriptor } from './Model/CharacteristicDescriptor';
import { CharacteristicProperties } from './Model/CharacteristicProperties';
import { ManufacturerData } from './Model/ManufacturerData';
import { Service } from './Model/Service';
import { ConnectedPeripheral } from './Model/ConnectedPeripheral';
import { BleManagerDiscoverPeripheral } from './Model/BleManagerDiscoverPeripheral';
import { BleManagerDidUpdateValueForCharacteristic } from './Model/BleManagerDidUpdateValueForCharacteristic';
import { BleManagerConnectPeripheral } from './Model/BleManagerConnectPeripheral';
import { BleManagerDisconnectPeripheral } from './Model/BleManagerDisconnectPeripheral';
const bleManager = NativeModules.BleManager;

export module BleManager {

	export type IAdvertising = Advertising;
	export type IBleManagerConnectPeripheral = BleManagerConnectPeripheral;
	export type IBleManagerDidUpdateValueForCharacteristic = BleManagerDidUpdateValueForCharacteristic;
	export type IBleManagerDisconnectPeripheral = BleManagerDisconnectPeripheral;
	export type IBleManagerDiscoverPeripheral = BleManagerDiscoverPeripheral;
	export type IBondedPeripheral = BondedPeripheral;
	export type IConnectionPriority = ConnectionPriority;
	export type IDiscoveredPeripheral = DiscoveredPeripheral;
	export type ICharacteristic = Characteristic;
	export type ICharacteristicDescriptor = CharacteristicDescriptor;
	export type ICharacteristicProperties = CharacteristicProperties;
	export type IManufacturerData = ManufacturerData;
	export type IPeripheralInfo = PeripheralInfo;
	export type IScanningOptions = ScanningOptions;
	export type IService = Service;
	export type IStartOptions = StartOptions;

	export function read(peripheralId: string, serviceUUID: string, characteristicUUID: string) {
		return new Promise((fulfill: (data: number[]) => void, reject: (error: Error) => void) => {
			bleManager.read(peripheralId, serviceUUID, characteristicUUID, (error: Error, data: any) => {
				if (error) {
					reject(error);
				} else {
					fulfill(data);
				}
			});
		});
	}

	export function readRSSI(peripheralId: string) {
		return new Promise((fulfill: (data: number) => void, reject: (error: Error) => void) => {
			bleManager.readRSSI(peripheralId, (error: Error, rssi: number) => {
				if (error) {
					reject(error);
				} else {
					fulfill(rssi);
				}
			});
		});
	}

	export function refreshCache(peripheralId: string) {
		return new Promise((fulfill: (data: PeripheralInfo) => void, reject: (error: Error) => void) => {
			bleManager.refreshCache(peripheralId, (error: Error, result: PeripheralInfo) => {
				if (error) {
					reject(error);
				} else {
					fulfill(result);
				}
			});
		});
	}

	export function retrieveServices(peripheralId: string, services: string[]) {
		return new Promise((fulfill: (data: PeripheralInfo) => void, reject: (error: Error) => void) => {
			console.log('retrieveServices', peripheralId, services);
			bleManager.retrieveServices(peripheralId, services, (error: Error, peripheral: PeripheralInfo) => {
				if (error) {
					reject(error);
				} else {
					fulfill(peripheral);
				}
			});
		});
	}

	export function write(peripheralId: string, serviceUUID: string, characteristicUUID: string, data: number[], maxByteSize?: number) {
		if (maxByteSize == null) {
			maxByteSize = 20;
		}
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.write(peripheralId, serviceUUID, characteristicUUID, data, maxByteSize, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function writeWithoutResponse(peripheralId: string, serviceUUID: string, characteristicUUID: string, data: number[], maxByteSize?: number, queueSleepTime?: number) {
		if (maxByteSize == null) {
			maxByteSize = 20;
		}
		if (queueSleepTime == null) {
			queueSleepTime = 10;
		}
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.writeWithoutResponse(peripheralId, serviceUUID, characteristicUUID, data, maxByteSize, queueSleepTime, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function connect(peripheralId: string) {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.connect(peripheralId, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function createBond(peripheralId: string) {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.createBond(peripheralId, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function removeBond(peripheralId: string) {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.removeBond(peripheralId, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function disconnect(peripheralId: string) {
		return new Promise((fulfill, reject) => {
			bleManager.disconnect(peripheralId, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function startNotification(peripheralId: string, serviceUUID: string, characteristicUUID: string) {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.startNotification(peripheralId, serviceUUID, characteristicUUID, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function stopNotification(peripheralId: string, serviceUUID: string, characteristicUUID: string) {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.stopNotification(peripheralId, serviceUUID, characteristicUUID, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function checkState(): void {
		bleManager.checkState();
	}

	export function start(options?: StartOptions) {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			if (options == null) {
				options = {};
			}
			bleManager.start(options, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function scan(serviceUUIDs: string[], seconds: number, allowDuplicates?: boolean, scanningOptions: ScanningOptions = {}) {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			if (allowDuplicates == null) {
				allowDuplicates = false;
			}

			// (ANDROID) Match as many advertisement per filter as hw could allow
			// dependes on current capability and availability of the resources in hw.
			if (scanningOptions.numberOfMatches == null) {
				scanningOptions.numberOfMatches = 3;
			}

			// (ANDROID) Defaults to MATCH_MODE_AGGRESSIVE
			if (scanningOptions.matchMode == null) {
				scanningOptions.matchMode = 1;
			}

			// (ANDROID) Defaults to SCAN_MODE_LOW_POWER on android
			if (scanningOptions.scanMode == null) {
				scanningOptions.scanMode = 0;
			}

			bleManager.scan(serviceUUIDs, seconds, allowDuplicates, scanningOptions, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function stopScan() {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.stopScan((error: Error) => {
				if (error != null) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function enableBluetooth() {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.enableBluetooth((error: Error) => {
				if (error != null) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export function getConnectedPeripherals(serviceUUIDs: string[]) {
		return new Promise((fulfill: (peripherals: ConnectedPeripheral[]) => void, reject: (error: Error) => void) => {
			bleManager.getConnectedPeripherals(serviceUUIDs, (error: Error, result: ConnectedPeripheral[]) => {
				if (error) {
					reject(error);
				} else {
					if (result != null) {
						fulfill(result);
					} else {
						fulfill([]);
					}
				}
			});
		});
	}

	export function getBondedPeripherals() {
		return new Promise((fulfill: (peripherals: BondedPeripheral[]) => void, reject: (error: Error) => void) => {
			bleManager.getBondedPeripherals((error: Error, result: BondedPeripheral[]) => {
				if (error) {
					reject(error);
				} else {
					if (result != null) {
						fulfill(result);
					} else {
						fulfill([]);
					}
				}
			});
		});
	}

	export function getDiscoveredPeripherals() {
		return new Promise((fulfill: (peripherals: DiscoveredPeripheral[]) => void, reject: (error: Error) => void) => {
			bleManager.getDiscoveredPeripherals((error: Error, result: DiscoveredPeripheral[]) => {
				if (error) {
					reject(error);
				} else {
					if (result != null) {
						fulfill(result);
					} else {
						fulfill([]);
					}
				}
			});
		});
	}

	export function removePeripheral(peripheralId: string) {
		return new Promise((fulfill: () => void, reject: (error: Error) => void) => {
			bleManager.removePeripheral(peripheralId, (error: Error) => {
				if (error) {
					reject(error);
				} else {
					fulfill();
				}
			});
		});
	}

	export async function isPeripheralConnected(peripheralId: string, serviceUUIDs: string[]) {
		const connectedPeripherals = await getConnectedPeripherals(serviceUUIDs);
		return connectedPeripherals.findIndex((p: ConnectedPeripheral) => p.id === peripheralId) > -1;
	}

	export function requestConnectionPriority(peripheralId: string, connectionPriority: ConnectionPriority) {
		return new Promise((fulfill: (status: number) => void, reject: (error: Error) => void) => {
			bleManager.requestConnectionPriority(peripheralId, connectionPriority, (error: Error, status: number) => {
				if (error) {
					reject(error);
				} else {
					fulfill(status);
				}
			});
		});
	}

	export function requestMTU(peripheralId: string, mtu: number) {
		return new Promise((fulfill: (mtu: number) => void, reject: (error: Error) => void) => {
			bleManager.requestMTU(peripheralId, mtu, (error: Error, mtu: number) => {
				if (error) {
					reject(error);
				} else {
					fulfill(mtu);
				}
			});
		});
	}
}
export default BleManager;
