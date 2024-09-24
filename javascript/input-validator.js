function onlyAlpha(elem) {
    let regex = /[^a-zA-Z. \s]+/;
    elem.value = elem.value.replace(regex, '')

}
function onlyNum(elem) {
    let regex = /[^0-9\s]+/;
    elem.value = elem.value.replace(regex, '')

}