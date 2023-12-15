// function distanceFromHqInBlocks(distance){
//     if(distance == 43){
//        console.log(1)
//     }else if(distance ==  50){
//         console.log(8)
//     }else if(distance == 34){
//         console.log(8)
//     }
// }

// function distanceFromHqInBlocks(location) {
//     const hqLocation = 42; // Headquarters location
//     const distance = Math.abs(location - hqLocation);
  
//     if (location < hqLocation) {
//       // If the location is below 42nd street, double the distance
//       return distance * 2;
//     } else {
//       return distance;
//     }
//   }

function distanceFromHqInBlocks(location){
    let hqLocation = 42;
    let  distance = Math.abs(location - hqLocation );

    if( location < hqLocation ) {
        return distance *1 ;
   } else{ return distance

   }
}


function distanceFromHqInFeet(location){
    let feetPerBlock = 264;
    let hqLocation = 42 ;
    let hqLocationInFeet = hqLocation * feetPerBlock;
    let distanceInBlocks = Math.abs(location - hqLocation);
    let distanceInFeet = distanceInBlocks * feetPerBlock;

    if (location < hqLocationInFeet){
        return  distanceInFeet * 1

}else {
    return distanceInFeet
}
}



function distanceTravelledInFeet(startOfBlock, endOfBlock){
    let feetPerBlock = 264;
    let distanceTravelled = Math.abs(startOfBlock - endOfBlock);
    let distanceInFeet = distanceTravelled* feetPerBlock;

    return distanceInFeet;
}


function calculatesFarePrice(start,destination ){
    let feetPerBlock = 264;
    let distanceTravelled = Math.abs(destination - start);
    let distanceTravelledInFeet = distanceTravelled * feetPerBlock;

    if ( distanceTravelledInFeet < 400){
        return 0
    } else if ( distanceTravelledInFeet <= 2000){
        let fare = 0.02 * (distanceTravelledInFeet- 400);
        return fare;
    } else if (distanceTravelledInFeet >=2000 && distanceTravelledInFeet <=2500 ){
        return 25
    }else {
        return 'cannot travel that far'
    }
    

}