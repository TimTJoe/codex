var optionsTag = document.getElementById("years")

//The same logic can be written in two lines of javascript.
function genYears(len=100) {
    let year = new Date().getFullYear();
    let years = Array.from(new Array(len), (v, idx) => year - idx);
    return years
}

var years = genYears();
var content = years.map((year,idx) =>  `<option value="${idx}">${year}</option>`)
optionsTag.insertAdjacentHTML("beforeend", content)

