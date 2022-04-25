/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = function (arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = function (arr){
    return arr.map(record => createEmployeeRecord(record))
}

const createTimeInEvent = function (dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(hour, 10), date: date})
    return this
}

const createTimeOutEvent = function (dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(hour, 10), date: date})
    return this
}

const hoursWorkedOnDate = function (onDate){
    const timeIn = this.timeInEvents.find(e => e.date === onDate)
    const timeOut = this.timeOutEvents.find(e => e.date === onDate)
    return parseInt((timeOut.hour - timeIn.hour) / 100, 10)
}

const wagesEarnedOnDate = function (onDate){
    return Number(hoursWorkedOnDate.call(this, onDate) * this.payPerHour)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function (srcArray, firstName){
    return srcArray.find(e => e.firstName === firstName)
}

const calculatePayroll = function (recordsArray){
    return recordsArray.map(e => allWagesFor.call(e)).reduce((total, current) => total + current, 0)

}

