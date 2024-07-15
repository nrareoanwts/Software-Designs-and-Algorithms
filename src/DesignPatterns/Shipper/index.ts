import { IShipper } from '../types/Shipper';
import { AirEastShipper, ChicagoSprintShipper, PacificParcelShipper } from './Shippers';


export class ShipperFactory {
    public static getShipper(fromZipCode: string): IShipper {
        const firstDigit = parseInt(fromZipCode.charAt(0));

        if (isNaN(firstDigit)) {
            return new AirEastShipper();
        }

        if (firstDigit >= 1 && firstDigit <= 3) {
            return new AirEastShipper();
        } else if (firstDigit >= 4 && firstDigit <= 6) {
            return new ChicagoSprintShipper();
        } else if (firstDigit >= 7 && firstDigit <= 9) {
            return new PacificParcelShipper();
        }

        return new AirEastShipper();
    }
}
