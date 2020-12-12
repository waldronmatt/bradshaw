export default abstract class Lease {
  private amount: number;

  private startDate: Date;

  private endDate: Date;

  private Customer: any;

  private Slip: any;

  public constructor(__startDate: Date) {
    this.setAmount(0);
    this.setStartDate(__startDate);
    this.setEndDate(null);
    this.setCustomer(null);
    this.setSlip(null);
  }

  // setters
  public setAmount(__amount: number): void {
    this.amount = __amount;
  }

  public setStartDate(__startDate: Date): void {
    this.startDate = __startDate;
  }

  public setEndDate(__endDate: Date): void {
    this.endDate = __endDate;
  }

  public setCustomer(__Customer: any): void {
    this.Customer = __Customer;
  }

  public setSlip(__Slip: any): void {
    this.Slip = __Slip;
  }

  // getters
  public getAmount(): number {
    return this.amount;
  }

  public getStartDate(): string {
    return this.startDate.toDateString();
  }

  public getEndDate(): string {
    return this.endDate.toDateString();
  }

  public getCustomer(): any {
    return this.Customer;
  }

  public getSlip(): any {
    return this.Slip;
  }
}
