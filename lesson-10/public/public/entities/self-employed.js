import Employee from './employee.js';
class SelfEmployedPerson extends Employee {
    hourPay;
    hoursWorked;
    constructor({ hourPay, hoursWorked = 0, ...personProps }) {
        super(personProps);
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    toString() {
        return `${this.getPersonalInfo()}
                hour pay: ${this.hourPay}
                hours worked: ${this.hoursWorked}`;
    }
}
export default SelfEmployedPerson;
//# sourceMappingURL=self-employed.js.map