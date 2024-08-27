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

class MotorBike extends Vehicle {
    
    private cc: number = 5;

    public constructor(protected readonly b: string, protected readonly n: number, protected readonly c: number) {
        super(b, n);
        this.cc = c;
      }
    
    public getCc(): number {
        return this.cc;
    }
}

enum Brand {
    Kawasaki = "Kawasaki",
    BMW = "BMW",
    Yamaha = "Yamaha"
}

let brand: Brand = Brand.Kawasaki

const vehicle = new MotorBike("motorBike", 2, 125);
console.log(Brand.Kawasaki);