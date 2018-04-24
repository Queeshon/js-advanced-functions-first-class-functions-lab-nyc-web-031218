const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  newDrivers = [ drivers[0], drivers[1] ]

  return newDrivers;
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  newDrivers = [ drivers[drivers.length - 2], drivers[drivers.length - 1] ]

  return newDrivers;
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(multiplier) {
  return function (num){
    return num * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fxn) {
  return fxn(drivers)
}
