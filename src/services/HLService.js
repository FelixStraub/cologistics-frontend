export default class HLService {

  chaincodeId = "dcd5eaf5106bdb27a0ea724a555b3880";
  headers = {
    'apikey': 'XdNa4CgwYYgnoW95uBW38jQOIlSwOCRVtiMoA5HIPsZmtj1p6TA8JStkJ0Kc75CMSYScjFoUaCpo94Y8oXGo4UXN24i3G3QBX2xp8xBUop1HcB78FQg8urrhr73KKDGknGJhp2t5YxdMzwCUx5LmsEkmN3aPZB5yioxRv3qQuDPKaliTaXKeBaKW38D2mCLteKxd39vUYRquTa7J86vu0d7DZOHnoeVOdIfhlW8jiKgB6EEfjLoA5WR517lpL5y356ZqrnwPhdsK1rWnxwExrwux4RE7u7Tlr8D2DXbvsCobt115P4tXcRcpDBvHPLe3J7zJv56Et4sshi4OJVWEppUxhRGgN2TyFOa24qLVAe3USI91kJuaEQ8jq8NWeZlHIeUaPAihtkoxpyW4pjspQbrdpDkmqK4GuIAjtiw51oBPeQHde6WpiT1xjIFezltNJgGPNSdh7SA6Jrht0NojBAAbi0osd0xQblKLFNQOdh40BjhTwuFL66N6IYOhOoOz',
    "content-type": "application/json",
    "cache-control": "no-cache"
  };



  getBalance(currentUserId) {
    return this.nonAsyncMakeQueryRequest(this.buildDataForFcn("queryId", [currentUserId]))
  }

  async createShipment(creatorId, recipient, retailer, price, pickUpLocation, destination, contentList) {
    const shipment = new Shipment();
    shipment.creatorId = creatorId;
    shipment.recipient = recipient;
    shipment.retailer = retailer;
    shipment.price = price;
    shipment.pickupLocation = pickUpLocation;
    shipment.contentList = contentList;
    shipment.destination = destination;

    return this.makeInvokeRequest(this.buildDataForFcn("createShipment", shipment.asArray()));
  }

  async updateStatus(shipmentId, carrier, status, space) {
    return this.makeInvokeRequest(this.buildDataForFcn("updateStatus", [shipmentId, status, carrier, space]));
  }

  buildDataForFcn(functionName, args) {
    return {
      "chaincodeId": this.chaincodeId,
      "fcn": functionName,
      "args": args
    };
  }

  async makeInvokeRequest(data) {
    console.log(data);
    return fetch('https://hyperledger-api.cfapps.eu10.hana.ondemand.com/invoke', {
      method: 'post',
      body: JSON.stringify(data),
      headers: this.headers
    });
  }

  nonAsyncMakeQueryRequest(data) {
    return fetch('https://hyperledger-api.cfapps.eu10.hana.ondemand.com/query', {
      method: 'post',
      body: JSON.stringify(data),
      headers: this.headers
    });
  }

  async makeQueryRequest(data) {
    return fetch('https://hyperledger-api.cfapps.eu10.hana.ondemand.com/query', {
      method: 'post',
      body: JSON.stringify(data),
      headers: this.headers
    });

  }
}

export class Shipment {
  creatorId = "";
  carrier = "";
  recipient = "";
  retailer = "";
  price = "";
  pickupLocation = "";
  destination = "";
  contentList = "";
  space = "";
  startPoint = "";
  endPoint = "";

  asArray() {
    return [
      this.creatorId,
      this.carrier,
      this.recipient,
      this.retailer,
      this.pickupLocation,
      this.price,
      this.destination,
      this.contentList,
      this.space,
      this.startPoint,
      this.endPoint]
  }

}