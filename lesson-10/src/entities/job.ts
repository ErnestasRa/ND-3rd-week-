/* eslint-disable indent */
class Job {
    private static instanceCount = 0;

    private id: string;

    private finished: boolean = false;

    private payed: boolean = false;

    private dateFinished?: Date;

    constructor(private title: string, private pay: number) {
        Job.instanceCount += 1;
        this.id = `${Job.instanceCount}`;
        this.finished = false;
        this.payed = false;
    }

    public completeJob = (): void => {
        this.finished = true;
        this.dateFinished = new Date();
    };

    public setJobPayed = (): void => {
        this.payed = true;
    };

    public getPay = (): number => this.pay;

    public isFinished = (): boolean => this.finished;

    public isPayed = (): boolean => this.payed;

    public toString = (): string => `id: ${this.id}, title: ${this.title}, pay: ${this.pay}, `;
}

export default Job;
