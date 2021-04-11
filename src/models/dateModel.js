function getFormatedDate(date,all) {

    let newDate = new Date(date);
    let mon = checkvalue(newDate.getMonth() + 1);
    let d = checkvalue(newDate.getDate());
    let min = checkvalue(newDate.getMinutes());
    let h = newDate.getHours();
    let timeZone= "AM";

    let getHour = parseInt(h);

    if (getHour > 12) {
        timeZone = "PM";
        h = getHour - 12;
    }
    else if (getHour === 0) {
        h = "12";
    }

    h = checkvalue(h);
    if(all)return mon+"-"+d+"-"+newDate.getFullYear()+" "+h+":"+min+" "+timeZone;
    return mon+"-"+d+"-"+newDate.getFullYear()
}

function checkvalue(value) {
    return (value < 10) ? "0" + value : value;
}

export default getFormatedDate;