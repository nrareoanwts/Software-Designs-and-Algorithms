class PersistenceStub {
    private static readonly symbolsToAllow = '123456789';
    private static nextId: number = 1;

    public static getZipCode(): string {
        let result = '';
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * this.symbolsToAllow.length);
            result += this.symbolsToAllow[randomIndex];
        }
        return result;
    }

    public static getUniqueShipmentId(): number {
        const shipmentId = this.nextId;
        this.nextId += 1;
        return shipmentId;
    }
}

export default PersistenceStub;
