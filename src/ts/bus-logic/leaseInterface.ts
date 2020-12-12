export interface LeaseInterface {
  // method all lease subclasses must include
  calculateFee(__length: number): void;
}

export enum EnumCompanyInfo {
  CompanyName = "Bradshaw Marina",
  CompanyAddress = "PO Box 101 Lake Clinton",
  CompanyPhone = "(419) 555-8765",
}
