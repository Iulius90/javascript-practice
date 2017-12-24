// link: http://www.codewars.com/kata/number-of-people-in-the-bus


//                            Number of People in the Bus


// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array 
// has two items which represent number of people get into bus (The first item) and number 
// of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station
// (after the last array). Even though it is the last bus stop, the bus is not empty and some 
// people are still in the bus, and they are probably sleeping there :D

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

const number = busStops => {
  let people = 0;
  for (let i in busStops) {
    people += busStops[i][0] -= busStops[i][1];
  } 
  return people;
}
