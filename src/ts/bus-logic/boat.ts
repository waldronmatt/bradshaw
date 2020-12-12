export default class Boat {
  protected stateRegistrationNo: string;

  protected length: number;

  protected manufacturer: string;

  protected year: number;

  // reference variable to Customer class
  protected Customer: any;

  protected Slip: any;

  public constructor(
    __stateRegistrationNo: string,
    __length: number,
    __manufacturer: string,
    __year: number,
    __Customer: any
  ) {
    this.setStateRegistrationNo(__stateRegistrationNo);
    this.setLength(__length);
    this.setManufacturer(__manufacturer);
    this.setYear(__year);
    this.assignBoatToCustomer(__Customer);
    this.setSlip(null);
  }

  // assign Boat to Customer
  public assignBoatToCustomer(__Customer: any): void {
    this.setCustomer(__Customer);
    this.Customer.setBoat(this);
  }

  // assign Boat to Customer
  public assignBoatToSlip(__Slip: any): void {
    this.setSlip(__Slip);
    this.Slip.setBoat(this);
  }

  // setters
  public setStateRegistrationNo(__stateRegistrationNo: string): void {
    this.stateRegistrationNo = `${__stateRegistrationNo}`;
  }

  public setLength(__length: number): void {
    this.length = __length;
  }

  public setManufacturer(__manufacturer: string): void {
    this.manufacturer = `${__manufacturer}`;
  }

  public setYear(__year: number): void {
    this.year = __year;
  }

  public setCustomer(__Customer: any): void {
    this.Customer = __Customer;
  }

  public setSlip(__Slip: any): void {
    this.Slip = __Slip;
  }

  // getters
  public getStateRegistrationNo(): string {
    return this.stateRegistrationNo;
  }

  public getLength(): number {
    return this.length;
  }

  public getManufacturer(): string {
    return this.manufacturer;
  }

  public getYear(): number {
    return this.year;
  }

  public getCustomer(): any {
    return this.Customer;
  }

  public getSlip(): any {
    return this.Slip;
  }

  public tellAboutSelf(): string {
    return `
      Registration: ${this.stateRegistrationNo},
      Length: ${this.length},
      Manufacturer: ${this.manufacturer} ${this.year},
      \n
      Customer name: ${this.getCustomer().getName()},
      Customer address: ${this.getCustomer().getAddress()},
      Customer number: ${this.getCustomer().getPhoneNo()}
    `;
  }
}
