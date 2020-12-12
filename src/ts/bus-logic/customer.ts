// blueprint for customer
export default class Customer {
  private address: string;

  private phoneNo: string;

  private name: string;

  // reference variable to Boat class
  private Boat: any;

  private Lease: any;

  public constructor(__name: string, __address: string, __phoneNo: string) {
    this.setName(__name);
    this.setAddress(__address);
    this.setPhoneNo(__phoneNo);
    this.setBoat(null);
    this.setLease(null);
  }

  // setters
  public setName(__name: string): void {
    this.name = `${__name}`;
  }

  public setAddress(__address: string): void {
    this.address = `${__address}`;
  }

  public setPhoneNo(__phoneNo: string): void {
    this.phoneNo = `${__phoneNo}`;
  }

  public setBoat(__Boat: any): void {
    this.Boat = __Boat;
  }

  public setLease(__Lease: any): void {
    this.Lease = __Lease;
  }

  // getters
  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public getPhoneNo(): string {
    return this.phoneNo;
  }

  public getBoat(): any {
    return this.Boat;
  }

  public getLease(): any {
    return this.Lease;
  }

  public tellAboutSelf(): string {
    return `
      Customer name: ${this.getName()},
      Address: ${this.getAddress()},
      Phone number: ${this.getPhoneNo()}
    `;
  }
}
