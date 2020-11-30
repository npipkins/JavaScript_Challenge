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
    // console.log(key, value);
    var cell = row.append("td");
    
    cell.text(value);
  });

});

// //Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    // d3.event.preventDefault();
    // Create input elements
    var inputDateElement = d3.select("#datetime");
    var inputCityElement = d3.select("#city");
    var inputStateElement = d3.select("#state");
    var inputCountryElement = d3.select("#country");
    var inputShapeElement = d3.select("#shape");

    // Get the value property of the input element
    var inputDateValue = inputDateElement.property("value");
    var inputCityValue = inputCityElement.property("value");
    var inputStateValue = inputStateElement.property("value");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeValue = inputShapeElement.property("value");
    
    // var filteredDate = tableData.filter(event => event.datetime === inputValue);
    // var filteredCity = tableData.filter(event => event.city === inputValue);
    // var filteredState = tableData.filter(event => event.state === inputValue);
    // var filteredCountry = tableData.filter(event => event.country === inputValue);
    // var filteredShape = tableData.filter(event => event.shape === inputValue);

    if (inputDateValue !== "") {
        var filteredDataone = tableData.filter(event => event.datetime === inputDateValue)} 
    else {var filteredDataone = tableData}
   
    if (inputCityValue !== "") {
        var filteredDatatwo = filteredDataone.filter(event => event.city === inputCityValue)} 
    else {var filteredDatatwo = filteredDataone}

    if (inputStateValue !== "") {
        var filteredDatathree = filteredDatatwo.filter(event => event.state === inputStateValue)} 
    else {var filteredDatathree = filteredDatatwo}

    if (inputCountryValue !== "") {
        var filteredDatafour = filteredDatathree.filter(event => event.country === inputCountryValue)} 
    else {var filteredDatafour = filteredDatathree}

    if (inputShapeValue !== "") {
        var filteredDatafive = filteredDatafour.filter(event => event.shape === inputShapeValue)} 
    else {var filteredDatafive = filteredDatafour}

    // var filteredData = tableData.filter(event => (event.datetime === inputDateValue && event.city === inputCityValue && inputStateValue && event.country === inputCountryValue  && event.City === inputValue && event.City === inputValue)
    // console.log(filteredData);

    // console.log(filteredDatatwo);

    d3.select("tbody").html("");
    
    filteredDatafive.forEach((UFOReport) => {
        const row = tbody.append("tr");
        for (key in UFOReport){
            const cell = tbody.append("td");
            cell.text(UFOReport[key]);
        };
    
    });

});
