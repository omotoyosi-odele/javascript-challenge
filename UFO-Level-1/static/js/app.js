var tableData = data;
var tbody = d3.select("tbody");
var dateInput = d3.select("#date-form-input")
var stateInput = d3.select("#state-form-select")
var cityInput = d3.select("#city-form-select")
var countryInput = d3.select("#country-form-select")
var shapeInput = d3.select("#shape-form-select")
var button = d3.select("#button")
var form = d3.select("#form")

function displayTableRows(data) {
    data.forEach(function(tableRowData) {
        var row = tbody.append("tr");
        Object.values(tableRowData).forEach((value, index) => {
            /*if (index === 5){
                return;
            }*/
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

displayTableRows(tableData);

var selectCity = []
var selectState = []
var selectCountry = []
var selectShape = []

tableData.forEach(
    function(value){
        if (!selectCity.includes(value.city)){
            selectCity.push(value.city)
        };
        if (!selectState.includes(value.state)){
            selectState.push(value.state)
        };
        if (!selectCountry.includes(value.country)){
            selectCountry.push(value.country)
        };
        if (!selectShape.includes(value.shape)){
            selectShape.push(value.shape)
        };
    }
);
console.log(selectCity);
console.log(selectState);
console.log(selectCountry);
console.log(selectShape);

function insertSelectOptions(selectOption, selectInput) {
    selectOption.forEach(function(value) {
        var row = selectInput.append("option");
        row.text(value);
    });
}

insertSelectOptions(selectCity, cityInput);
insertSelectOptions(selectState, stateInput);
insertSelectOptions(selectCountry, countryInput);
insertSelectOptions(selectShape, shapeInput);


/*var stateSelect = document.getElementById('state');  
for(var i = 0; i < usStates.length; i++) {
    var option = document.createElement("option");
    option.text = usStates[i].name;     
    option.value = usStates[i].abbreviation;     
    stateSelect.add(option);
    }*/


button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    var date = dateInput.property("value");
    var state = stateInput.property("value");
    var city = cityInput.property("value");
    var country = countryInput.property("value");
    var shape = shapeInput.property("value");

        var filteredData = tableData.filter(
            function dateCheck(value) {
                var valueDate = new Date(value.datetime);
                var dateInputDate = new Date(date);
                if (date){
                return dateInputDate.getUTCDate() === valueDate.getUTCDate() &&
                       dateInputDate.getUTCMonth() === valueDate.getUTCMonth() &&
                       dateInputDate.getUTCFullYear() === valueDate.getUTCFullYear();
                }
                return true;
            }
        ).filter(
            function stateCheck(value){
                if (state){
                return state === value.state;
                }
                return true;
            }
        ).filter(
            function cityCheck(value){
                if (city){
                return city === value.city;
                }
                return true;
            }
        ).filter(
            function countryCheck(value){
                if (country){
                return country === value.country;
                }
                return true;
            }
        ).filter(
            function shapeCheck(value){
                if (shape){
                return shape === value.shape;
                }
                return true;
            }
        );
        tbody.html("");
        displayTableRows(filteredData);


   
        filteredData = tableData
}   
