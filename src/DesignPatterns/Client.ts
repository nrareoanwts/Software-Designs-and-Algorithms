import { IShipmentData } from './types/IShipment';
import Shipment from './Shipment';

class Client {
    private shipment: Shipment;

    constructor(data: IShipmentData) {
        this.shipment = Shipment.getInstance(data);
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
