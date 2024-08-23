interface Maintenance {
    estimateNextMaintenance: () => number;
}

class Vehicle implements Maintenance {

    public estimateNextMaintenance(): number {
        return 2;
    }
    
    private brand: string = "Kawasaki";
    
    public constructor(protected readonly b: string, protected readonly n: number) {
        this.brand = b;
        this.numWheels = n;
    }

    public getBrand(): string {
        return this.brand;
    } 
    private numWheels: number = 2;
    
    public getNumWheels(): number {
        return this.numWheels;
    }
}
const vehicle = new Vehicle("motorBike", 2);
console.log(vehicle.estimateNextMaintenance());