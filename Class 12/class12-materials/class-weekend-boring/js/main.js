document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()


  switch (day) {
    case "saturday":
    case "sunday":
    case "sat":
    case "sun":
      document.getElementById("placeToSee").innerHTML = "HYPE, its the weeknd!";
      break;
    case "tuesday":
    case "thursday":
    case "tue":
    case "tues":
    case "thur":
    case "thurs":
      document.getElementById("placeToSee").innerHTML = "It's Leon day!";
      break;
    case "monday":
    case "wednesday":
    case "friday":
    case "mon":
    case "wed":
    case "fri":
      document.getElementById("placeToSee").innerHTML = "It's a chill day";
      break;
    default:
      document.getElementById("placeToSee").innerHTML = "That's not a day.."
  }



  // if ( day === "saturday" || day === "sunday" ) {
  //   document.getElementById("placeToSee").innerHTML = "HYPE, its the weeknd!"
  // } else if ( day === "tuesday" || day === "thursday" ) {
  //   document.getElementById("placeToSee").innerHTML = "It's Leon day!"
  // } else if ( day === "monday" || day === "wednesday" || day === "friday" ) {
  //   document.getElementById("placeToSee").innerHTML = "It's a chill day"
  // } else {
  //   document.getElementById("placeToSee").innerHTML = "That's not a day.."
  // }

}
