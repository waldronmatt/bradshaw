import AnnualLease from "./annualLease";
import SlipIDException from "./slipIDException";
import SlipWidthException from "./slipWidthException";

export default class Slip {
  // declare constants for default slip attributes and data validation
  private readonly DEFAULT_WIDTH: number = 12;

  private readonly DEFAULT_SLIP_LENGTH: number = 25;

  private readonly MAXIMUM_NUMBER_OF_SLIPS: number = 50;

  private readonly VALID_SLIP_WIDTHS: number[] = [10, 12, 14, 16];

  // variable to contain all slip instances
  private static numberOfSlips = 0;

  // define attributes
  private slipID: number;

  private width: number;

  private slipLength: number;

  private Boat: any;

  private Dock: any;

  private Lease: any;

  // populate instance attributes
  public constructor(
    __slipID: number,
    __width: number,
    __slipLength: number,
    __Dock: any
  ) {
    this.setSlipID(__slipID);
    (this.constructor as typeof Slip).setNumberOfSlips();
    // assign default slip attributes if params 2 and 3 are null
    // eslint-disable-next-line prefer-rest-params
    if (!arguments[1] && !arguments[2]) {
      this.setSlipWidth(this.DEFAULT_WIDTH);
      this.setSlipLength(this.DEFAULT_SLIP_LENGTH);
    } else {
      this.setSlipWidth(__width);
      this.setSlipLength(__slipLength);
    }
    this.setDock(__Dock);
    this.Dock.addSlipToDock(this);
    this.setBoat(null);
    this.setLease(null);
  }

  public leaseAnnualSlip(
    __Customer: any,
    __startDate: Date,
    __payMonthly: boolean
  ): void {
    this.Lease = new AnnualLease(
      __startDate,
      this.getSlipWidth(),
      __payMonthly
    );
    this.Lease.setSlip(this);
    this.Lease.setCustomer(__Customer);
    __Customer.setLease(this.Lease);
  }

  // setters
  public setSlipID(__slipID: number): void {
    // check if ID is between 1 and maximum
    if (__slipID < 1 || __slipID > this.MAXIMUM_NUMBER_OF_SLIPS) {
      throw new SlipIDException(this.MAXIMUM_NUMBER_OF_SLIPS);
    } else {
      this.slipID = __slipID;
    }
  }

  public setSlipWidth(__width: number): void {
    // check if width matches an index in array
    let validWidth = false;
    for (let i = 0; i < this.VALID_SLIP_WIDTHS.length; i += 1) {
      if (__width === this.VALID_SLIP_WIDTHS[i]) {
        validWidth = true;
      }
    }
    if (validWidth) {
      this.width = __width;
    } else {
      throw new SlipWidthException(__width, this.VALID_SLIP_WIDTHS);
    }
    this.width = __width;
  }

  public setSlipLength(__slipLength: number): void {
    this.slipLength = __slipLength;
  }

  public setBoat(__Boat: any): void {
    this.Boat = __Boat;
  }

  public setDock(__Dock: any): void {
    this.Dock = __Dock;
  }

  public setLease(__Lease: any): void {
    this.Lease = __Lease;
  }

  // getters
  public getSlipID(): number {
    return this.slipID;
  }

  public getSlipWidth(): number {
    return this.width;
  }

  public getSlipLength(): number {
    return this.slipLength;
  }

  public getBoat(): any {
    return this.Boat;
  }

  public getDock(): any {
    return this.Dock;
  }

  public getLease(): any {
    return this.Lease;
  }

  // set the number of slip instances
  public static setNumberOfSlips(): void {
    this.numberOfSlips += 1;
  }

  // get the number of slip instances
  public static getNumberOfSlips(): number {
    return this.numberOfSlips;
  }

  public tellAboutSelf(): string {
    return `
      Slip Id = ${this.getSlipID()},
      Width = ${this.getSlipWidth()},
      Length = ${this.getSlipLength()}
    `;
  }

  // calculate fee
  public leaseSlip(discountPercent: number): string {
    let fee: number;
    switch (this.getSlipWidth()) {
      case 10:
        fee = 800;
        break;
      case 12:
        fee = 900;
        break;
      case 14:
        fee = 1100;
        break;
      case 16:
        fee = 1500;
        break;
      default:
        fee = 0;
    }

    const formatFee = () => fee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    // if argument passed into parameter, calculate discount
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    discountPercent ? (fee = (fee * (100 - discountPercent)) / 100) : fee;
    return formatFee();
  }
}
