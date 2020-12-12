export default class SlipWidthException extends Error {
  constructor(__width: number, __VALID_SLIP_WIDTHS: any) {
    super();

    // maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SlipWidthException);
    }

    this.name = "Slip Width Exception";
    // custom debugging information
    this.message = `Invalid slip width ${__width}. Valid widths are ${__VALID_SLIP_WIDTHS}`;
  }
}
