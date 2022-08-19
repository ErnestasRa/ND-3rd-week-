/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-lone-blocks */
type PrimitiveType = string | number | boolean;

const randomStringArray: string[] = ['labas', 'katu', 'oho'];
const randomNumArray: number[] = [1, 2, 3, 4, 5, 6, 512];
/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai
  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const returnFirstElement = <Type>(arr: Type[]): Type => arr[0];
    console.log(returnFirstElement(randomStringArray));
    console.log(returnFirstElement(randomNumArray));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const returnLastArrElement = <Type>(arr: Type[]): Type => arr[arr.length - 1];
    console.log(returnLastArrElement(randomStringArray));
    console.log(returnLastArrElement(randomNumArray));
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const returnPrimitiveTypes = <Type extends PrimitiveType>(arr: Type[]): Type[] => {
        const types: Type[] = arr.map((x) => x);
        return types;
    };

    console.log(returnPrimitiveTypes(randomNumArray));
    console.log(returnPrimitiveTypes(randomStringArray));
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    // ('a', 2) -> ['a', 'a']
    // (77, 4) -> [77, 77, 77, 77]
    // (true, 1) -> [true]
    // Sprendimas ir rezultatų spausdinimas
    const returnHowManyTimes = <Type extends PrimitiveType>(
        arr: Type,
        count: number): Type[] => {
        const newArr: Type[] = [];
        for (let i = 0; i < count; i += 1) {
            newArr.push(arr);
        }
        return newArr;
    };

    console.log(returnHowManyTimes('labas', 5));
    console.log(returnHowManyTimes(true, 5));

}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    type SameType<T> = [T[], T[]]

    const returnCombinedTypes = <Type>(arr1: Type[], arr2: Type[]): Type[] => [...arr1, ...arr2];
    const sameType1: SameType<Number> = [1, 2, 3];
    const sameType2: SameType<Number> = [4, 5, 6];
    const sameType3: SameType<String> = ['labas', 'vau', 'katu'];
    const sameType4: SameType<String> = ['Oho', 'amazing', 'nerealu'];

    console.log(returnCombinedTypes(sameType1, sameType2));
    console.log(returnCombinedTypes(sameType3, sameType4));
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    type AnyValue<Type> = {
        setValue: (newValue: Type) => void;
        getValue: () => Type
    }

    const anyType = <Type>(startValue: Type): AnyValue<Type> => {
        let value: Type = startValue;
        return {
            setValue: (newValue) => value = newValue,
            getValue: () => value,
        };
    };

    const newValue1: string = 'labas';
    const object1 = anyType(newValue1);

    console.log(object1.getValue());
}

console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards

type Person = {
    name: string,
    surname: string,
};

type Student = Person & {
    university: string,
    course: number,
};

type Worker = Person & {
    avgMonthlyPay: number,
};

type Group = {
    people: Person[],
    worker: Worker[],
    student: Student[],
}

const isStudent = (person: Person): person is Student => {
    const student = person as Student;
    return student.university !== undefined && student.course !== undefined;
};

const isWorker = (person: Worker): person is Worker => {
    const worker = person as Worker;
    return worker.avgMonthlyPay !== undefined;
};
const answer = (people: Person[]): Group => {
    const peopleGroup = people.reduce<Group>((prevGroup, newGroup)) => {
    const newGroup = { ...prevGroup };
    if (isStudent(person)) newGroup.student.push(person);
    if (isWorker(person)) newGroup.worker.push(person);
    else newGroup.people.push(person);
}, {
    people: [],
        student: [],
            worker: [],
        };
const people: (Person | Student | Worker)[] = [
    {
        name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2,
    },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    {
        name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2,
    },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    {
        name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1,
    },
];
}
