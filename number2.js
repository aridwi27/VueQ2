let leapYear = (awal, akhir) => {

    let jarak = []
    for (let i = awal; i<= akhir; i++) {
        jarak.push(i)
    }
    var new_array = []
    jarak.forEach(year => {
        if (test_LeapYear(year))
        new_array.push(year)
    })
    console.log (new_array)
}
function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
    }

    leapYear(1900,2000)