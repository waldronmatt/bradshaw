export enum COMPANYINFO {
  CompanyName = "Bradshaw Marina",
  CompanyAddress = "PO Box 101 Lake Clinton",
  CompanyPhone = "(419) 555-8765",
}

export interface CompanyInterface {
  // all classes must implement this method
  tellAboutSelf(): void;
  COMPANY_CONSTANTS: COMPANYINFO;
}
