import Boat from "./boat";

export default class Powerboat extends Boat {
  private noEngines: number;

  private fuelType: string;

  public constructor(
    __stateRegistrationNo: string,
    __length: number,
    __manufacturer: string,
    __year: number,
    __noEngines: number,
    __fuelType: string,
    __Customer: any
  ) {
    // invoke Boat (super) constructor
    super(__stateRegistrationNo, __length, __manufacturer, __year, __Customer);
    // powerboat specific attributes
    this.setNoEngines(__noEngines);
    this.setFuelType(__fuelType);
  }

  // setters
  setNoEngines(__noEngines: number): void {
    this.noEngines = __noEngines;
  }

  setFuelType(__fuelType: string): void {
    this.fuelType = `${__fuelType}`;
  }

  // getters
  getNoEngines(): number {
    return this.noEngines;
  }

  getFuelType(): string {
    return this.fuelType;
  }

  // custom method overrides superclass method
  tellAboutSelf(): string {
    return `
      This is a powerboat:
      \n
      Boat details: ${super.tellAboutSelf()},
      Engine Count: ${this.noEngines},
      Fuel Type: ${this.fuelType}
    `;
  }
}
