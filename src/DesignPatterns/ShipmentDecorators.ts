import { IShipment } from './types/IShipment';
import Shipment from './Shipment';

class ShipmentDecorator implements IShipment {
    protected decoratedShipment: Shipment;

    constructor(component: Shipment) {
        this.decoratedShipment = component;
    }

    public ship(): string {
        return this.decoratedShipment.ship();
    }
}

class FragileDecorator extends ShipmentDecorator {
    public ship(): string {
        return `${this.decoratedShipment.ship()}\n**MARK FRAGILE**`;
    }
}

class DoNotLeaveDecorator extends ShipmentDecorator {
    public ship(): string {
        return `${this.decoratedShipment.ship()}\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
    }
}

class ReturnReceiptDecorator extends ShipmentDecorator {
    public ship(): string {
        return `${this.decoratedShipment.ship()}\n**MARK RETURN RECEIPT REQUESTED**`;
    }
}

export { FragileDecorator, DoNotLeaveDecorator, ReturnReceiptDecorator };
