// code your solution here

//Defining arrays
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
];

// superbowlWin takes an array of records as input
function superbowlWin(records) {
  const winningRecord = records.find(record => record.result === "W");
  
  // Use the find() method to search for a record with a result of "W" (win)
  return winningRecord ? winningRecord.year : undefined;
  // If a winning record is found, return the year of the win; otherwise, If no win is found, it should return, sadly, undefined
}

// Export the superbowlWin function to make it accessible to other modules
module.exports = superbowlWin;