import Person, { Personprops } from './person.js';
import Employee from './employee.js';
import calcMonthWorkDays from '../helpers/calc-month-days.js';

export type WorkPersonProps = Personprops & {
    hourPay: number,
    fullTimeEquivalent: number,
}
class WorkPerson extends Employee {
    private hourPay: number;

    private fullTimeEquivalent: number;

    constructor({ hourPay, fullTimeEquivalent, ...personProps }: WorkPersonProps) {
        super(personProps);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }

    public calcPay(): number {
        calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent() * 8;
    }

    public override toString(): string {
        return `${this.getPersonalInfo()}
                hour pay: ${this.hourPay()}
                full time equivalent: ${this.fullTimeEquivalent()}`;
    }
}

export default WorkPerson;
