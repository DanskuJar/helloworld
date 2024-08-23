interface Maintenance {
    estimateNextMaintenance: () => number;
}

class Vehicle implements Maintenance {

    public estimateNextMaintenance(): number {
        return 2;
    }
    
    private brand: string = "Kawasaki";
    
    public constructor(protected readonly brand: string, protected readonly numWheels: number) {
        this.brand = brand;
    }

    public getBrand(): string {
        return this.brand;
    } 
    private numWheels: number = 2;
    
    public getNumWheels(): number {
        return this.numWheels;
    }
}
const vehicle = new Vehicle("motorBike");
console.log(vehicle.estimateNextMaintenance());