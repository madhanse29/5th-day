//Print odd numbers in an array
(function () {
    for(let i=1; i<=20; i++){
       
        if(i % 2 != 0){
        console. log(i);
        }
    }
  })(); 

  //Convert all the strings to title caps in a string array

  (function () {
    var arr = ["one","two","three","four"];
  var str = String(arr).toUpperCase().split(",");
  console.log(str);
  })();


//Sum of all numbers in an array
 
var arr = [32, 26, 14, 55, 10];

add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
 
var sum = add(arr);
console.log(sum) ;

//Return all the prime numbers in an array

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));

// Return all the palindromes in an array

const arr = ['mom', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

//Return median of two sorted arrays of same size

var ar1 = [1, 12, 15, 26, 38 ];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)

function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
       
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
    
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 

    console.log("Median is "+ getMedian(ar1, ar2, n1));

//Remove duplicates from an array

var a = [1,2,3,4,4,2,5,5]
uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
})

console.log(uniqueArray);


//Rotate an array by k times

let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 3;
 
function RightRotate(a, n, k)
{
 
 
    for (let i = 0; i < n; i++) {
        if (i < k) {

           console.log(a[n + i - k] + " ");
        }
        else {
 
       
            console.log((a[i - k]) + " ");
        }
    }
  
}

RightRotate(Array, N, K);
 
