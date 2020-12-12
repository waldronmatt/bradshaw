export default class Dock {
  private id: number;

  private location: string;

  private electricity: boolean;

  private water: boolean;

  // implement slip association with Vector class
  private Slips: any[];

  public constructor(
    __id: number,
    __location: string,
    __electrictity: boolean,
    __water: boolean
  ) {
    this.setID(__id);
    this.setLocation(__location);
    this.setElectricity(__electrictity);
    this.setWater(__water);
    this.Slips = [];
  }

  public addSlipToDock(__Slip: any): void {
    this.Slips.push(__Slip);
    __Slip.setDock(this);
  }

  public getSlips(): any {
    return this.Slips;
  }

  public setID(__id: number): void {
    this.id = __id;
  }

  public setLocation(__location: string): void {
    this.location = __location;
  }

  public setElectricity(__electrictity: boolean): void {
    this.electricity = __electrictity;
  }

  public setWater(__water: boolean): void {
    this.water = __water;
  }

  public getID(): number {
    return this.id;
  }

  public getLocation(): string {
    return this.location;
  }

  public getElectricity(): boolean {
    return this.electricity;
  }

  public getWater(): boolean {
    return this.water;
  }
}
