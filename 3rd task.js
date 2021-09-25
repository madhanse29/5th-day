//Print odd numbers in an array
 
 var ar = ()=>{
    for(let i=1; i<=20; i++){
       
        if(i % 2 != 0){
        console. log(i);
        }
    }
  }
  ar()
  
  //Convert all the strings to title caps in a string array

  var str = () => {
    var arr = ["one","two","three","four"];
    var str = String(arr).toUpperCase().split(",");
    console.log(str);
  }
  str()

// //Sum of all numbers in an array
var arr = [32, 26, 14, 55, 10];
 var add = (arr)=> {
   
    return arr.reduce((a, b) => a + b, 0);
  
  
 }
 var sum = add(arr);
 console.log(sum) ;

// //Return all the prime numbers in an array

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 
var prime = (num)=>{
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
}

prime()
console.log(array.filter(prime));

// // Return all the palindromes in an array

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

