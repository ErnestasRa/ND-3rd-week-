"use strict";
const randomStringArray = ['labas', 'katu', 'oho'];
const randomNumArray = [1, 2, 3, 4, 5, 6, 512];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const returnFirstElement = (arr) => arr[0];
    console.log(returnFirstElement(randomStringArray));
    console.log(returnFirstElement(randomNumArray));
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const returnLastArrElement = (arr) => arr[arr.length - 1];
    console.log(returnLastArrElement(randomStringArray));
    console.log(returnLastArrElement(randomNumArray));
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const returnPrimitiveTypes = (arr) => {
        const types = arr.map((x) => x);
        return types;
    };
    console.log(returnPrimitiveTypes(randomNumArray));
    console.log(returnPrimitiveTypes(randomStringArray));
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const returnHowManyTimes = (arr, count) => {
        const newArr = [];
        for (let i = 0; i < count; i += 1) {
            newArr.push(arr);
        }
        return newArr;
    };
    console.log(returnHowManyTimes('labas', 5));
    console.log(returnHowManyTimes(true, 5));
    console.log(returnHowManyTimes((randomNumArray), 5));
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const returnCombinedTypes = (arr1, arr2) => [...arr1, ...arr2];
    const sameType1 = [1, 2, 3];
    const sameType2 = [4, 5, 6];
    const sameType3 = ['labas', 'vau', 'katu'];
    const sameType4 = ['Oho', 'amazing', 'nerealu'];
    console.log(returnCombinedTypes(sameType1, sameType2));
    console.log(returnCombinedTypes(sameType3, sameType4));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const anyType = (startValue) => {
        let value = startValue;
        return {
            setValue: (newValue) => value = newValue,
            getValue: () => value,
        };
    };
    const newValue1 = 'labas';
    const object1 = anyType(newValue1);
    console.log(object1.getValue());
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const isStudent = (person) => {
        const student = person;
        return student.university !== undefined && student.course !== undefined;
    };
    const isWorker = (person) => {
        const worker = person;
        return worker.avgMonthlyPay !== undefined;
    };
    const answer = (people) => {
        const peopleGroup = people.reduce((prevGroup, person) => {
            const newGroup = { ...prevGroup };
            if (isStudent(person))
                newGroup.student.push(person);
            if (isWorker(person))
                newGroup.worker.push(person);
            else
                newGroup.people.push(person);
        });
    };
    {
        people: [],
            student;
        [],
            worker;
        [],
        ;
    }
    ;
    const people = [
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
//# sourceMappingURL=main.js.map