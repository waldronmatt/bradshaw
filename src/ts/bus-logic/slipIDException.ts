export default class SlipIDException extends Error {
  constructor(__MAXIMUM_NUMBER_OF_SLIPS: number) {
    super();

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SlipIDException);
    }

    this.name = "Slip ID Exception";
    // Custom debugging information
    this.message = `Slip ID not between 1 and ${__MAXIMUM_NUMBER_OF_SLIPS}`;
  }
}
