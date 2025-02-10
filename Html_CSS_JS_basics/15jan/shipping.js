class Package{

    constructor(id, weight, destination){
        this.packageId = id;
        this.weight = weight;
        this.destination = destination;
    }
}

class Shipment{

    constructor(id, status, courier, packs = []){
        this.shipmentId = id;
        this.packages = packs;
        this.status = status;
        this.courier = courier;
    }
}

class Courier {
     
    constructor(id, name, vehicle){
        this.courierId = id;
        this.name = name;
        this.vehicle = vehicle;
    }
}

class ShippingCompany{

    constructor(){
        this.packages = [];
        this.shipments = [];
        this.couriers = [];
    }

    // Adding Packages to the pacakages list in shipping company
    addPackage(id, weight, destination){
        let newPackage = new Package(id, weight, destination);
        this.packages.push(newPackage);
        console.log("New Package Added");
    }

    // Adding Couriers to the couriers list in shipping company
    addCourier(id, name, vehicle){
        let newCourier = new Courier(id, name, vehicle);
        this.couriers.push(newCourier);
        console.log("New Courier Added");
    }

    // craeating and adding shipment to shipments list in shipping company
    createShipment(id, status, courier, packs ){
        let newShipment = new Shipment(id, status, courier, packs);
        this.shipments.push(newShipment);
        console.log("New Shipment Added");
    }

    //Tracking shipment status by id
    trackShipment(id) {
        const shipment = this.shipments.find(element => element.shipmentId == id);
        if (shipment) {
            // console.table(shipment);
            console.log(shipment.status);
        } else {
            console.log("Shipment not found!");
        }
    }

  
    // Updating shipment status 
    updateShipmentStatus(id, newStatus) {
        const shipmentIndex = this.shipments.findIndex(element => element.shipmentId == id);
        if (shipmentIndex !== -1) {
            this.shipments[shipmentIndex].status = newStatus;
            console.log(`Shipment ${id} status updated to ${newStatus}`);
        } else {
            console.log("Shipment not found!");
        }
    }

    //View list of all packages
    viewAllPackages(){
        console.table(this.packages);
    }

    // View list of all couriers
    viewCourierInfo(){
        console.table(this.couriers);
    }
    
    
}

const shipping = new ShippingCompany();

shipping.addPackage(1, 110, "Mumbai");
shipping.addPackage(2, 100, "Pune");
shipping.addPackage(3, 210, "Delli");
shipping.viewAllPackages();

shipping.addCourier(11, "post", "Train");
shipping.addCourier(12, "SS", "Van");
shipping.viewCourierInfo();

shipping.createShipment(101, "OnShip", 11, [1, 2]);
shipping.trackShipment(101);


