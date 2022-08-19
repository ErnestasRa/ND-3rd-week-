/* eslint-disable indent */
export type Personprops = {
    id: string,
    name: string,
    surname: string,
}

abstract class Person {
    protected id: string;

    protected name: string;

    protected surname: string;

    constructor({ id, name, surname }: Personprops) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    public abstract toString(): string

    public getPersonalInfo = (): string => `${this.id} ${this.name} ${this.surname}`;
}

export default Person;
