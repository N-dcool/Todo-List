module.exports = date;

function date(){
let today = new Date();
    let option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    } 

    let day = today.toLocaleDateString("en-US", option);

    return day;
}