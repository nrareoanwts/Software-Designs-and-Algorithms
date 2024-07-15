export interface IShipmentData {
    shipmentId: number,
    weight: number,
    fromAddress: string,
    fromZipCode: string,
    toAddress: string,
    toZipCode: string
};

export interface IShipment {
    ship(): string;
}