function createDate(year, month, day) {
    return {
        day: day,
        month: month,
        year: year
    }
}

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !==0 || year % 400 === 0);
}

function numberOfDaysInMonth(year, month) {
    const daysIn = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) daysIn[2] = 29;
    return daysIn[month];
}

function numberOfDaysInYear(year) {
    if(isLeapYear(year)) return 366;
    else return 365;
    /*let days = 0;
    for (let month = 1; month <= 12; month++) {
        days += numberOfDaysInMonth(year, month);
    }
    return days;*/
    // return dayInYear(createDate(year, 12, 31));
}

function dayInYear(date) {
    let days = date.day;
    for (let month = 1; month < date.month; month++) {
        days += numberOfDaysInMonth(date.year, month);
    }
    return days;
}

function comesBefore(date1, date2) {
    if(date1.year < date2.year) return true;
    if(date1.year > date2.year) return false;
    if(date1.month < date2.month) return true;
    if(date1.month > date2.month) return false;
    if(date1.day < date2.day) return true;
    if(date1.day > date2.day) return false;
    return false;
}

function isEqual(date1, date2) {
    return date1.year === date2.year && date1.month === date2.month && date1.day === date2.day;
}

function dateDiffInYears(first, last) {
    let years = last.year - first.year;
    if(comesBefore(createDate(last.year, first.month, first.day), last))
        years--;
    return years;
}

export { createDate, comesBefore, isEqual, dateDiffInYears };