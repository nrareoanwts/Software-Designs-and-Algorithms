import { IShipmentData } from './types/IShipment';

const PRICE = 39;

class Shipment {
    private static instance: Shipment;
    private static nextId: number = 1;

    private shipmentId: number;
    private weight: number;
    private fromAddress: string;
    private fromZipCode: string;
    private toAddress: string;
    private toZipCode: string;

    private constructor({
        shipmentId,
        weight,
        fromAddress,
        fromZipCode,
        toAddress,
        toZipCode,
    }: IShipmentData) {
        if (shipmentId === 0) {
            this.shipmentId = Shipment.getShipmentId();
        } else {
            this.shipmentId = shipmentId;
        }
        this.weight = weight;
        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
    }

    public static getInstance({
        shipmentId,
        weight,
        fromAddress,
        fromZipCode,
        toAddress,
        toZipCode,
    }: IShipmentData) {
        if (!Shipment.instance) {
            Shipment.instance = new Shipment({ shipmentId, weight, fromAddress, fromZipCode, toAddress, toZipCode });
        }
        return Shipment.instance;
    }

    private static getShipmentId(): number {
        const shipmentId = Shipment.nextId;
        Shipment.nextId += 1;
        return shipmentId;
    }

    // TODO: convert to $
    private getCost(weight: number) {
        const cost = weight * PRICE;
        
        return cost.toFixed(2)
    }

    public ship(): string {
        return `Shipment ID: ${this.shipmentId}, From: ${this.fromZipCode}, ${this.fromAddress}, To: ${this.toZipCode}, ${this.toAddress}, Cost: $${this.getCost(this.weight)}`;
    }
}

export default Shipment;
