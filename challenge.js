//Sum
function sumOf(arr) 
{
    let sum = 0;

     for (let num of arr) {
         sum += num;
     }
     return sum;
 }
 
//Mean
function meanOf(arr) 
{
    let sum = 0;

     for (let num of arr) {
         sum += num;
     }
     return sum / arr.length;
 }
 
//Median
 function medianOf(arr) 
 {
   const arrSorted = arr.sort((a,b) => a - b);
   return arrSorted.length % 2 === 0 ?
 (arrSorted[arrSorted.length/2 - 1] + 
 arrSorted[arrSorted.length/2]) / 2 :
 arrSorted[Math.floor(arrSorted.length/2)];
}
 

//Mode
function modeOf(arr)
{
  let freq = 0, freqNum, list = []

  arr.forEach(function(num){
    let foundNum = list.find(function(el){ return el.num == num })

    if(foundNum){
      foundNum.count++
      if(foundNum.count > freq){
      	freqNum = num
        freq = foundNum
      }
    }
    else
      list.push({num: num, count: 1})
  })
	
  return freqNum
}

//Range
/* function rangeOf(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
} */

//Standard Deviation
function standardDeviation(values)
{
  var avg = average(values);
  
  var squareDiffs = values.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data)
{
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}



//Array
 let arr = [];
 
  while(true)
  {
    let input = prompt("Add a value. Enter 'Q' after adding all your values.");
      if(input === "q" || input === null)
      {
        break;
      }
  arr.push(Number(input));
  }

  console.log(arr)
  console.log("Sum: " + sumOf(arr));
  console.log("Mean: " +  meanOf(arr));
  console.log("Median: " + medianOf(arr));
  console.log("Mode: " + modeOf(arr));
  /*  console.log(rangeOf(arr)); */
  console.log("Standard Deviation: " + standardDeviation(arr));