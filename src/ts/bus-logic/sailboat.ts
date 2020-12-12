import Boat from "./boat";

// blueprint for sailboat
export default class Sailboat extends Boat {
  private keelDepth: number;

  private noSails: number;

  private motorTypes: string;

  public constructor(
    __stateRegistrationNo: string,
    __length: number,
    __manufacturer: string,
    __year: number,
    __keelDepth: number,
    __noSails: number,
    __motorTypes: string,
    __Customer: any
  ) {
    // invoke Boat (super) constructor
    super(__stateRegistrationNo, __length, __manufacturer, __year, __Customer);
    // sailboat specific attributes
    this.setKeelDepth(__keelDepth);
    this.setNoSails(__noSails);
    this.setMotorTypes(__motorTypes);
  }

  // setters
  setKeelDepth(__keelDepth: number): void {
    this.keelDepth = __keelDepth;
  }

  setNoSails(__noSails: number): void {
    this.noSails = __noSails;
  }

  setMotorTypes(__motorTypes: string): void {
    this.motorTypes = `${__motorTypes}`;
  }

  // getters
  getKeelDepth(): number {
    return this.keelDepth;
  }

  getNoSails(): number {
    return this.noSails;
  }

  getMotorTypes(): string {
    return this.motorTypes;
  }

  // custom method overrides superclass method
  tellAboutSelf(): string {
    return `This is a sailboat:
      \n
      Registration: ${this.stateRegistrationNo}
      Manufacturer: ${this.manufacturer}
      Length: ${this.length}
      Year: ${this.year}
      Sail Count: ${this.noSails}
      Motor Type: ${this.motorTypes}`;
  }
}
