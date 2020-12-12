/* eslint-disable no-console */
import Customer from "./bus-logic/customer";
import Slip from "./bus-logic/slip";
import Dock from "./bus-logic/dock";
import Boat from "./bus-logic/boat";
// import Sailboat from "./bus-logic/sailboat";
// import Powerboat from "./bus-logic/powerboat";
import AnnualLease from "./bus-logic/annualLease";
import DailyLease from "./bus-logic/dailyLease";

// customer testers
// let firstCustomer: any = new Customer('Joe', 'Boston', '555-1234');
// console.log(firstCustomer.tellAboutSelf());

// // slip testers
// let slips: any = [];

// slips[0] = new Slip(1, 10, 20);
// console.log(Slip.getNumberOfSlips());

// slips[1] = new Slip(2, null, null);
// console.log(Slip.getNumberOfSlips());

// slips[2] = new Slip(3, 14, 30);
// console.log(Slip.getNumberOfSlips());

// for (const slip in slips) {
//     if (slip == '1') {
//         console.log(slips[slip].tellAboutSelf());
//         console.log(`Discount is ${slips[slip].leaseSlip(20)} for slip ${slips[slip].getSlipID()}`);
//     } else {
//         console.log(slips[slip].tellAboutSelf());
//         console.log(`Fee is ${slips[slip].leaseSlip(null)} for slip ${slips[slip].getSlipID()}`);
//     }
// }

// try {
//     slips[3] = new Slip(150, 12, 25);
//     console.log(slips[3].tellAboutSelf());
// } catch (Error) {
//     console.log(Error);
// } finally {
//     console.log('Finally Executed!');
// }

// try {
//     slips[3] = new Slip(2, 13, 25);
//     console.log(slips[3].tellAboutSelf());
// } catch (Error) {
//     console.log(Error);
// } finally {
//     console.log('Finally Executed!');
// }

// // boat testers
// let firstBoat: any = new Boat('MO34561', 28, 'Tartan', 1998);
// let secondBoat: any = new Boat('MO45678', 27, 'S2 Yachts', 1994);
// let thirdBoat: any = new Boat('MO56789', 30, 'Catalina', 2001);

// console.log(firstBoat.getStateRegistrationNo());
// console.log(firstBoat.getLength());
// console.log(secondBoat.getManufacturer());
// console.log(thirdBoat.getYear());
// console.log(thirdBoat.tellAboutSelf());

// sailboat testers
// let secondSailBoat: any = new Sailboat('MO45678', 27, 'S2 Yachts', 1994, 3.9, 4, 'Outboard Gas', firstCustomer);

// console.log(secondSailBoat.getStateRegistrationNo());
// console.log(secondSailBoat.getLength());
// console.log(secondSailBoat.getManufacturer());
// console.log(secondSailBoat.getYear());
// console.log(secondSailBoat.getKeelDepth());
// console.log(secondSailBoat.getNoSails());
// console.log(secondSailBoat.getMotorTypes());
// console.log(secondSailBoat.tellAboutSelf());

// // powerboat testers
// let secondPowerBoat: any = new Powerboat('MO67891', 30, 'Bayliner', 2001, 2, 'Gas', firstCustomer);

// console.log(secondPowerBoat.getStateRegistrationNo());
// console.log(secondPowerBoat.getLength());
// console.log(secondPowerBoat.getManufacturer());
// console.log(secondPowerBoat.getYear());
// console.log(secondPowerBoat.getNoEngines());
// console.log(secondPowerBoat.getFuelType());
// console.log(secondPowerBoat.tellAboutSelf());

// lease testers
// let date1 = new Date('February 1, 2020');
// let firstLease = new Lease(date1);
// console.log(firstLease.getStartDate());

// let date2 = new Date();
// let secondLease = new Lease(date2);
// console.log(secondLease.getAmount());
// console.log(secondLease.getStartDate());
// console.log(secondLease.getEndDate());

const date1 = new Date("08/028/2020");
const date2 = new Date("09/03/2020");
const date3 = new Date("09/07/2020");

const firstLease = new AnnualLease(date1, 14, true);
const secondLease = new AnnualLease(date2, 16, false);
const thirdLease = new DailyLease(date1, date2, 14);
const fourthLease = new DailyLease(date2, date3, 16);

console.log(`Annual Lease 1 information is:`);
console.log(
  `${firstLease.getAmount()} ${firstLease.getStartDate()} ${firstLease.getEndDate()} ${firstLease.getBalanceDue()} ${firstLease.getPayMonthly()}`
);
console.log(`Annual Lease 2 information is:`);
console.log(
  `${secondLease.getAmount()} ${secondLease.getStartDate()} ${secondLease.getEndDate()} ${secondLease.getBalanceDue()} ${secondLease.getPayMonthly()}`
);

console.log(`Daily Lease 1 information is:`);
console.log(
  `${thirdLease.getAmount()} ${thirdLease.getStartDate()} ${thirdLease.getEndDate()} ${thirdLease.getNumberOfDays()} ${thirdLease.tellAboutSelf()}`
);
console.log(`Daily Lease 2 information is:`);
console.log(
  `${fourthLease.getAmount()} ${fourthLease.getStartDate()} ${fourthLease.getEndDate()} ${fourthLease.getNumberOfDays()} ${fourthLease.tellAboutSelf()}`
);

// let firstAnnualLease = new AnnualLease(date1, 14, true);
// let secondAnnualLease = new AnnualLease(date2, 16, true);

// try {
//     firstAnnualLease.recordLeasePayment(1200.00);
// } catch (customError) {
//     console.log(customError);
// }

// try {
//     secondAnnualLease.recordLeasePayment(1800.00);
// } catch (customError) {
//     console.log(customError);
// }

// customer testers
// let oneCustomer: any = new Customer('Eleanor', 'Atlanta', '123-4567');
// let oneBoat: any = new Boat('MO34561', 28, 'Tartan', 2002);
// oneCustomer.setBoat(oneBoat);
// console.log(oneCustomer.getBoat().getStateRegistrationNo());
// console.log(oneCustomer.getBoat().getManufacturer());
// console.log(oneCustomer.getBoat().getLength());
// console.log(oneCustomer.getBoat().getYear());

// // boat testers
// let twoCustomer: any = new Customer('Eleanor', 'Atlanta', '123-4567');
// let twoBoat: any = new Boat('MO34561', 28, 'Tartan', 2002);
// twoBoat.assignBoatToCustomer(twoCustomer);
// console.log(twoBoat.getCustomer().getName());
// console.log(twoBoat.getCustomer().getAddress());
// console.log(twoBoat.getCustomer().getPhoneNo());
// console.log(twoCustomer.getBoat().getStateRegistrationNo());
// console.log(twoCustomer.getBoat().getManufacturer());
// console.log(twoCustomer.getBoat().getLength());
// console.log(twoCustomer.getBoat().getYear());

// let firstCustomer = new Customer('Eleanor', 'Atlanta', '123-4567');
// let secondCustomer = new Customer('JoAnn', 'St Louis', '987-6543');

// let firstBoat = new Boat('MO34567', 28, 'Tartan', 2002, firstCustomer);
// let secondBoat = new Boat('MO98765', 32, 'Catalina', 2001, secondCustomer);

// console.log(firstBoat.tellAboutSelf());
// console.log(secondBoat.tellAboutSelf());

// let firstDock = new Dock(1, 'Main Cover', true, false);
// let firstSlip = new Slip(1, 10, 20, firstDock);
// let secondSlip = new Slip(2, 12, 25, firstDock);
// let thirdSlip = new Slip(3, 14, 25, firstDock);

// let slips = firstDock.getSlips();
// console.log(`Dock 1 has ${slips.length} slips`);

// slips.forEach((slip: any) => console.log(`slip id: ${slip.getSlipID()} slip width: ${slip.getSlipWidth()} slip length: ${slip.getSlipLength()}`));
// console.log(`${firstSlip.getDock().getID()}`);
// console.log(`${firstSlip.getDock().getLocation()}`);
// console.log(`${firstSlip.getDock().getElectricity()}`);
// console.log(`${firstSlip.getDock().getWater()}`);

// firstBoat.assignBoatToSlip(firstSlip);
// secondBoat.assignBoatToSlip(secondSlip);
// console.log(`Information for customer ${firstCustomer.getName()}`);
// console.log(`Boat is ${firstCustomer.getBoat().getManufacturer()}`);
// console.log(`Slip is ${firstCustomer.getBoat().getSlip().getSlipID()}`);
// console.log(`Dock is ${firstCustomer.getBoat().getSlip().getDock().getID()}`);

const date = new Date("08/028/2020");
const firstDock = new Dock(1, "Main Cover", true, false);

const firstCustomer = new Customer("Eleanor", "Atlanta", "123-4567");
const firstBoat = new Boat("MO34567", 28, "Tartan", 2002, firstCustomer);
const firstSlip = new Slip(1, 12, 20, firstDock);
// let secondSlip = new Slip(150, 13, 25, firstDock);
// let thirdSlip = new Slip(2, 13, 25, firstDock);

firstBoat.assignBoatToSlip(firstSlip);
firstSlip.leaseAnnualSlip(firstCustomer, date, true);

console.log(
  `${firstBoat
    .getCustomer()
    .getName()} owns ${firstCustomer
    .getBoat()
    .getManufacturer()} ${firstCustomer.getBoat().getLength()}`
);
console.log(
  `Boat ${firstSlip
    .getBoat()
    .getStateRegistrationNo()} is assigned to Slip no ${firstBoat
    .getSlip()
    .getSlipID()}`
);
console.log(
  `${firstCustomer.getName()} has leased slip no ${firstCustomer
    .getLease()
    .getSlip()
    .getSlipID()}`
);
console.log(`The lease amount is ${firstCustomer.getLease().getAmount()}`);
console.log(
  `Slip number ${firstSlip.getSlipID()} is leased to ${firstSlip
    .getLease()
    .getCustomer()
    .getName()}`
);
console.log(`The lease amount is ${firstSlip.getLease().getAmount()}`);
console.log(
  `Starting with slip 1 navigating to slip ${firstSlip
    .getBoat()
    .getCustomer()
    .getLease()
    .getSlip()
    .getSlipID()}`
);
