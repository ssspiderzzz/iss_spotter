const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchCoordsByIP("162.245.144.188", (error, coor) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , coor);
});