import Lease from "./lease";
import { LeaseInterface } from "./leaseInterface";
import LeasePaymentException from "./leasePaymentException";

export default class AnnualLease extends Lease implements LeaseInterface {
  private balanceDue: number;

  private payMonthly: boolean;

  public constructor(
    __startDate: Date,
    __slipWidth: number,
    __isPayMonthly: boolean
  ) {
    super(__startDate);

    const __endDate = new Date(
      __startDate.getFullYear() + 1,
      __startDate.getMonth(),
      __startDate.getDate()
    );
    // invoke superclass method setEndDate
    this.setEndDate(__endDate);

    // invoke superclass method setAmount
    this.setAmount(this.calculateFee(__slipWidth));
    this.setPayMonthly(__isPayMonthly);
    /*
      set the amount first
      are we paying monthly?
      set balance due to lease - one month if payment monthly
    */
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.payMonthly
      ? this.setBalanceDue(this.getAmount() - this.getAmount() / 12)
      : this.setBalanceDue(0);
  }

  // setters
  public setPayMonthly(__isPayMonthly: boolean): void {
    this.payMonthly = __isPayMonthly;
  }

  public setBalanceDue(__amount: number): void {
    this.balanceDue = __amount;
  }

  // getters
  public getPayMonthly(): boolean {
    return this.payMonthly;
  }

  public getBalanceDue(): number {
    return Math.round((this.balanceDue + Number.EPSILON) * 100) / 100;
  }

  public recordLeasePayment(__amount: number): void {
    if (__amount > this.balanceDue) {
      throw new LeasePaymentException(__amount, this);
    } else {
      this.balanceDue -= __amount;
    }
  }

  // result feeds into superclass method setAmount
  // eslint-disable-next-line class-methods-use-this
  public calculateFee(__slipWidth: number): number {
    let fee: number;
    switch (__slipWidth) {
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
    return fee;
  }
}
