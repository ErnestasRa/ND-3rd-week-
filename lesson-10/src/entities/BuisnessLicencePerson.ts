/* eslint-disable indent */
import { Personprops } from './person.js';
import Employee from './employee.js';
import Job from './job.js';

export type BuisnessLicensePersonProps = Personprops & {
    jobs?: Job[]
}

class BuisnessLicensePerson extends Employee {
    private jobs: Job[];

    constructor({ jobs = [], ...personProps }: BuisnessLicensePersonProps) {
        super(personProps);
        this.jobs = jobs;
    }

    public calcPay(): number {
        const unfinishedJob = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
        this.jobs.forEach((job) => job.setJobPayed());
        const calculatedPay = unfinishedJob.reduce((sum, job) => sum + job.getPay(), 0);
        return calculatedPay;
    }

    public override toString(): string {
        const { jobs } = this;

        let result = `${this.getPersonalInfo()}jobs: ${jobs.length === 0 ? 'nera darbu' : ''}`;

        if (this.jobs.length > 0) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }
        return result;
    }
}

export default BuisnessLicensePerson;
