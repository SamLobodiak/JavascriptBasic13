function print1to255(){
  for(var i = 0; i < 256; i++){
    console.log(i);
  }
}

function printIntsAndSum0to255(){
  var sum = 0;
  for(var i = 0; i < 256; i++){
    sum+=i;
    console.log(i,sum);
  }
}

function printMaxOfArray(arr){
  var max = arr[0];
  for (var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  console.log(max);
}

function returnOddsArray1To255(){
  var myArr = [];
  for (var i = 1; i < 256; i+=2) {
    myArr.push(i);
  }
  return myArr;
}

function returnArrayCountGreaterThanY(arr, y){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      console.log(arr[i]);
      count++;
    }
  }
  console.log(count);
}

function printMaxMinAveArr(arr){
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }

  console.log(max,min,sum/arr.length);
}

var tom = [1,2,4,6,7,8,3,-6,50];

printMaxMinAveArr(tom);
