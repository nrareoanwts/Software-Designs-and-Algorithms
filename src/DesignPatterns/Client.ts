import { IShipmentData } from './types/IShipment';
import { Options } from './types/Options';
import Shipment from './Shipment';
import ShipmentFactory from './ShipmentFactory';
import { FragileDecorator, DoNotLeaveDecorator, ReturnReceiptDecorator } from './ShipmentDecorators';

class Client {
    private shipment: any;

    constructor(shipmentData: IShipmentData, options: Options = {}) {
        this.shipment = ShipmentFactory.createShipment(shipmentData);
        if (options.fragile) {
            this.shipment = new FragileDecorator(this.shipment);
        }
        if (options.doNotLeave) {
            this.shipment = new DoNotLeaveDecorator(this.shipment);
        }
        if (options.returnReceipt) {
            this.shipment = new ReturnReceiptDecorator(this.shipment);
        }
    }

    public processShipment(): void {
        const shipmentDetails = this.shipment.ship();
        this.displayShipmentDetails(shipmentDetails);
    }

    private displayShipmentDetails(details: string): void {
        console.log(details);
    }
}

export default Client;
