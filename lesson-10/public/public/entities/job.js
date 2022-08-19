class Job {
    title;
    pay;
    static instanceCount = 0;
    id;
    finished = false;
    payed = false;
    dateFinished;
    constructor(title, pay) {
        this.title = title;
        this.pay = pay;
        Job.instanceCount += 1;
        this.id = `${Job.instanceCount}`;
        this.finished = false;
        this.payed = false;
    }
    completeJob = () => {
        this.finished = true;
        this.dateFinished = new Date();
    };
    setJobPayed = () => {
        this.payed = true;
    };
    getPay = () => this.pay;
    isFinished = () => this.finished;
    isPayed = () => this.payed;
    toString = () => `id: ${this.id}, title: ${this.title}, pay: ${this.pay}, `;
}
export default Job;
//# sourceMappingURL=job.js.map