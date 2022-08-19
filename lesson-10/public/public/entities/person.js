class Person {
    id;
    name;
    surname;
    constructor({ id, name, surname }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    getPersonalInfo = () => `${this.id} ${this.name} ${this.surname}`;
}
export default Person;
//# sourceMappingURL=person.js.map