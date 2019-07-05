const {fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes} = require('./iss_promised.js');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => printPassTimes(JSON.parse(body).response))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });