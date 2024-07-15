import Client from './Client';
import FrontendStub from './stubs/Frontend';

import { IShipmentData } from './types/IShipment';

const frontendData: IShipmentData = FrontendStub.getShipmentData();

const client = new Client(frontendData);
client.processShipment();
