import Shipment from './Shipment';
import { AirEastShipper, ChicagoSprintShipper, PacificParcelShipper } from './Shipper/Shippers';

class Letter extends Shipment {
    public getCost(): number {
        if (this.shipper instanceof AirEastShipper) {
            return this.weight * 0.39;
        }
        if (this.shipper instanceof ChicagoSprintShipper) {
            return this.weight * 0.42;
        }
        if (this.shipper instanceof PacificParcelShipper) {
            return this.weight * 0.51;
        }
    
        throw new Error('Unknown shipper type');
    }
}

class Package extends Shipment {
    public getCost(): number {
        if (this.shipper instanceof AirEastShipper) {
            return this.weight * 0.25;
        }
        if (this.shipper instanceof ChicagoSprintShipper) {
            return this.weight * 0.20;
        }
        if (this.shipper instanceof PacificParcelShipper) {
            return this.weight * 0.19;
        }

        throw new Error('Unknown shipper type');
    }
}

class Oversized extends Shipment {
    public getCost(): number {
        if (this.shipper instanceof AirEastShipper) {
            return this.weight * 0.25 + 10;
        }
        if (this.shipper instanceof ChicagoSprintShipper) {
            return this.weight * 0.20;
        }
        if (this.shipper instanceof PacificParcelShipper) {
            return this.weight * 0.19 + this.weight * 0.02;
        }

        throw new Error('Unknown shipper type');
    }
}

export { Letter, Package, Oversized };
