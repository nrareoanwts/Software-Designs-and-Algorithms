import { IShipper } from '../types/Shipper';

export class AirEastShipper implements IShipper {
    public getCost(weight: number): number {
        return weight * 0.39;
    }
}

export class ChicagoSprintShipper implements IShipper {
    public getCost(weight: number): number {
        return weight * 0.42;
    }
}

export class PacificParcelShipper implements IShipper {
    public getCost(weight: number): number {
        return weight * 0.51;
    }
}
