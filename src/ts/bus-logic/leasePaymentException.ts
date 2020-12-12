export default class LeasePaymentException extends Error {
  constructor(__amount: number, __AnnualLease: any) {
    super();

    // maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, LeasePaymentException);
    }

    this.name = "Lease Payment Exception";
    // custom debugging information
    this.message = `Exception for lease starting ${__AnnualLease.getStartDate()}
      with amount due ${__AnnualLease.getBalanceDue()} but payment made of ${__amount}`;
  }
}
