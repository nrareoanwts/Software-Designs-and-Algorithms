import PersistenceStub from "./Persistence";

interface FrontendData {
    shipmentId: number;
    weight: number;
    fromAddress: string;
    fromZipCode: string;
    toAddress: string;
    toZipCode: string;
}

class FrontendStub {
    public static getShipmentData(): FrontendData {
        return {
            shipmentId: 0,
            weight: 5,
            fromAddress: '123 Main St, Anytown, AS',
            fromZipCode: PersistenceStub.getZipCode(),
            toAddress: '456 Elm St, Othertown, OS',
            toZipCode: PersistenceStub.getZipCode(),
        };
    }
}

export default FrontendStub;
