import Employee from './employee.js';
class BuisnessLicensePerson extends Employee {
    jobs;
    constructor({ jobs = [], ...personProps }) {
        super(personProps);
        this.jobs = jobs;
    }
    calcPay() {
        const unfinishedJob = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
        this.jobs.forEach((job) => job.setJobPayed());
        const calculatedPay = unfinishedJob.reduce((sum, job) => sum + job.getPay(), 0);
        return calculatedPay;
    }
    toString() {
        const { jobs } = this;
        let result = `${this.getPersonalInfo()}jobs: ${jobs.length === 0 ? 'nera darbu' : ''}`;
        if (this.jobs.length > 0) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }
        return result;
    }
}
export default BuisnessLicensePerson;
//# sourceMappingURL=BuisnessLicencePerson.js.map