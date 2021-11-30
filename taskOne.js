let inputDate = Deno.args
function calculateAge(inputDate){



    let today = new Date()

    let dd = today.getDate().toString()
    if (today.getDate() < 10){
        dd = '0' + dd
    }

    let mm = today.getMonth().toString()
    if (today.getMonth() < 10){
        mm = '0' + mm
    }

    let yyyy = today.getFullYear().toString()

    let dateToday = yyyy + '-' + mm + '-' + dd
    let oneYear = 31536000000

    return Math.floor((Date.parse(dateToday) - Date.parse(inputDate)) / oneYear)
}
console.log(calculateAge(inputDate))