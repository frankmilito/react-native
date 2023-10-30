class Place {
  constructor(title, imageURI, address, location) {
    this.title = title;
    this.imageURI = imageURI;
    this.address = address;
    this.location = location; //{lat:22.22,lng:23.444}
    this.id = new Date().toString() + Math.random().toString();
  }
}
