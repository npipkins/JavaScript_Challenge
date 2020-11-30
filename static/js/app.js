// from data.js
var tableData = data;

// view data
// console.log(tableData)

//Get a reference to the table body
var tbody = d3.select("tbody");

//Loop throught the daata and log each UFO sighting
tableData.forEach(UFOsighting => {
    // console.log(UFOsighting);
//Append table rows
  var row = tbody.append("tr");

  Object.entries(UFOsighting).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
    cell.text(value);
  });
});


// var datetime = tableData.datetime
// var city = tableData.city
// var state = tableData.state
// var country = tableData.country
// var shape = tableData.shape
// var comment = tableData.comment

