import Client from './Client';
import FrontendStub from './stubs/Frontend';

import { IShipmentData } from './types/IShipment';
import { Options } from './types/Options';

const frontendData: IShipmentData = FrontendStub.getShipmentData();
const optionsStub: Options = FrontendStub.getOptions();

const client = new Client(frontendData, optionsStub);
client.processShipment();
