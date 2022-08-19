import { Personprops } from './person.js';
import Employee from './employee.js';

export type SelfEmployedPersonProps = Personprops & {
    hourPay: number,
    hoursWorked: number
}

class SelfEmployedPerson extends Employee {
    private hourPay: number;

    private hoursWorked: number;

    constructor({ hourPay, hoursWorked = 0, ...personProps }: SelfEmployedPersonProps) {
        super(personProps);
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }

    public override toString(): string {
        return `${this.getPersonalInfo()}
                hour pay: ${this.hourPay}
                hours worked: ${this.hoursWorked}`;
    }
}

export default SelfEmployedPerson;
