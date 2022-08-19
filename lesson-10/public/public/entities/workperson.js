import Employee from './employee.js';
import calcMonthWorkDays from '../helpers/calc-month-days.js';
class WorkPerson extends Employee {
    hourPay;
    fullTimeEquivalent;
    constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
        super(personProps);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay() {
        calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent() * 8;
    }
    toString() {
        return `${this.getPersonalInfo()}
                hour pay: ${this.hourPay()}
                full time equivalent: ${this.fullTimeEquivalent()}`;
    }
}
export default WorkPerson;
//# sourceMappingURL=workperson.js.map