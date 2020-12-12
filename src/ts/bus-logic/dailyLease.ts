import Lease from "./lease";
import { LeaseInterface } from "./leaseInterface";
import { CompanyInterface, COMPANYINFO } from "./companyInterface";

export default class DailyLease
  extends Lease
  implements LeaseInterface, CompanyInterface {
  public COMPANY_CONSTANTS: COMPANYINFO;

  private numberOfDays: number;

  public constructor(__startDate: Date, __endDate: Date, __slipWidth: number) {
    super(__startDate);

    // calculate diff between end date and start date
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const startDate = new Date(__startDate);
    const endDate = new Date(__endDate);

    function dateDiffInDays() {
      // discard the time and time-zone information.
      const utcStartDate = Date.UTC(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      );
      const utcEndDate = Date.UTC(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate()
      );

      return Math.floor((utcEndDate - utcStartDate) / _MS_PER_DAY);
    }

    this.setNumberOfDays(dateDiffInDays());

    // invoke superclass method setEndDate and setAmount
    this.setAmount(this.calculateFee(__slipWidth));
    this.setEndDate(__endDate);
  }

  // setters
  public setNumberOfDays(__numberOfDays: number): void {
    this.numberOfDays = __numberOfDays;
  }

  // getters
  public getNumberOfDays(): number {
    return this.numberOfDays;
  }

  // result feeds into superclass method setAmount
  public calculateFee(__slipWidth: number): number {
    let fee: number;
    switch (__slipWidth) {
      case 10:
        fee = 20 * this.getNumberOfDays();
        break;
      case 12:
        fee = 25 * this.getNumberOfDays();
        break;
      case 14:
        fee = 30 * this.getNumberOfDays();
        break;
      case 16:
        fee = 35 * this.getNumberOfDays();
        break;
      default:
        fee = 0 * this.getNumberOfDays();
    }
    return fee;
  }

  public tellAboutSelf(): string {
    return `
      This is a daily lease for ${this.numberOfDays} days
      for company ${COMPANYINFO.CompanyName}
      located at ${COMPANYINFO.CompanyAddress}
    `;
  }
}
