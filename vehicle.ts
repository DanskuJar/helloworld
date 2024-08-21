class Vehicle {
    private brand: string = "Kawasaki";

    public constructor(brand: string) {
        this.brand = brand;
    }
    public getBrand(): string {
        return this.brand;
    } 
    private numWheels: number = 2;
    
    public getNumWheels(): number {
        return this.numWheels
    }
}
const vehicle = new Vehicle("motorBike");
console.log(vehicle.getNumWheels());