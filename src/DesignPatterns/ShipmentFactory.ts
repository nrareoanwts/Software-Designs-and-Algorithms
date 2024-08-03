import Shipment from './Shipment';
import { IShipmentData } from './types/IShipment';
import { Letter, Package, Oversized } from './Shipments';

class ShipmentFactory {
    public static createShipment({
        shipmentId,
        weight,
        fromAddress,
        fromZipCode,
        toAddress,
        toZipCode,
    }: IShipmentData): Shipment {
        if (weight <= 15) {
            return new Letter({ shipmentId, weight, fromAddress, fromZipCode, toAddress, toZipCode });
        } else if (weight <= 160) {
            return new Package({ shipmentId, weight, fromAddress, fromZipCode, toAddress, toZipCode });
        } else {
            return new Oversized({ shipmentId, weight, fromAddress, fromZipCode, toAddress, toZipCode });
        }
    }
}

export default ShipmentFactory;
