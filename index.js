function scuberGreetingForFeet(rideHeight){
  // Write your code here!
  if (rideHeight <= 400){
    return 'This one is on me!';
  }
  else if (rideHeight <= 2000){
    return 'That will be twenty bucks.';
  }
  else if (2000 < rideHeight && rideHeight < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return 'No can do.'
  }
}

function ternaryCheckCity(cityName){
  if (cityName === 'NYC'){
    return 'Ok, sounds good.';
  }
  else{
    return 'No go.';
  }

  //or return cityName === "NYC" ? "Ok, sounds good.":"No go";
}


function switchOnCharmFromTip(typeOfTip){
  // Write your code here!
  switch (typeOfTip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return'Bye.';
      break;
      
    }
  }
