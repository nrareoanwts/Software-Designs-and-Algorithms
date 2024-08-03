import { IShipmentData } from './types/IShipment';
import { ShipperFactory } from './Shipper';
import { IShipment } from './types/IShipment';

abstract class Shipment implements IShipment {
    private static nextId: number = 1;

    protected shipmentId: number;
    protected weight: number;
    protected fromAddress: string;
    protected fromZipCode: string;
    protected toAddress: string;
    protected toZipCode: string;
    protected shipper: ShipperFactory;

    constructor({
        shipmentId,
        weight,
        fromAddress,
        fromZipCode,
        toAddress,
        toZipCode,
    }: IShipmentData) {
        this.shipmentId = shipmentId === 0 ? Shipment.getShipmentId() : shipmentId;
        this.weight = weight;
        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
        this.shipper = ShipperFactory.getShipper(this.fromZipCode);
    }

    // public static getInstance({
    //     shipmentId,
    //     weight,
    //     fromAddress,
    //     fromZipCode,
    //     toAddress,
    //     toZipCode,
    // }: IShipmentData) {
    //     if (!Shipment.instance) {
    //         Shipment.instance = new Shipment({ shipmentId, weight, fromAddress, fromZipCode, toAddress, toZipCode });
    //     }
    //     return Shipment.instance;
    // }

    private static getShipmentId(): number {
        const shipmentId = Shipment.nextId;
        Shipment.nextId += 1;
        return shipmentId;
    }

    // TODO: convert to $
    // private getCost() {
    //     const shipper = ShipperFactory.getShipper(this.fromZipCode);
    //     const cost = shipper.getCost(this.weight);
        
    //     return (cost / 100).toFixed(2)
    // }

    public getCost(): number { return 0 };

    public ship(): string {
        return `Shipment ID: ${this.shipmentId}, From: ${this.fromZipCode}, ${this.fromAddress}, To: ${this.toZipCode}, ${this.toAddress}, Cost: $${this.getCost()}`;
    }
}

export default Shipment;
