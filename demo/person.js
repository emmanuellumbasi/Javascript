import { comesBefore, createDate, isEqual, dateDiffInYears } from "./dates.js";

function createPerson(name, birthDay) {
    return {
        name: name,
        birthDay: birthDay
    }
}

function youngerThan(person1, person2) {
    return comesBefore(person1.birthDay, person2.birthDay);
}

function olderThan(person1, person2) {
    return !youngerThan(person1, person2) && !isEqual(person1.birthDay, person2.birthDay);
}

function allYoungerThan(people, person) {
    const subset = [];
    for(let p of people) {
        if(youngerThan(p, person))
            subset.push(p);
    }
    return subset;
}

function oldestYoungerThan(people, person) {
    people = allYoungerThan(people, person);
    let oldest = people[0];
    for(let p of people) {
        if(olderThan(p, oldest))
            oldest = p;
    }
    return oldest;
}

function age(person) {
    const now = new Date();
    const today = createDate(now.getFullYear(), now.getMonth()+1,now.getDate());
    return dateDiffInYears(person.birthDay, today);
}

