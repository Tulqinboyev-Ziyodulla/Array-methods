// {
//     // masala-1 //
//     let numbers = [-5, 3, 5, -2];
    
//       let result = [];
//       numbers.forEach((son) => (son > 0 ? result.push(son) : console.log()));
//       console.log(result);
// }


// {
//     // massala-2 //
//     const string = (key) => {
//         return key
//         .split("")
//         .reverse()
//         .join("")
//     }
//     console.log(string("salom"));
// }


// {
//     // masala-3 //
//     const string = (number) => {
//         return number.toString().split("").reverse("").join("")
//     }
//     console.log(string(123));
// }


// {
//     // masala-4 //
//     let boolean = [true, false, true, false];
//     {
//       let result = [];
//       boolean.forEach((son) => (son !== true ? result.push(son) : console.log("")));
//       console.log(result);
//     }
// }


// {
//     // masala-5 //
// {
//     let numbers = [1, 2, 3, 4, 5];
//     let result = [];
//     {
//       numbers.forEach((son) => son % 2 == 0 ? result.push(son) : console.log(""));
//       console.log(result);
//     }
// }

// {
//     function word(array){
//      let sum = 0
//      for(let i = 0, len = array.length; i < len; i++){
//         if(array[i] % 2 === 0){
//             sum += array[i]
//         }
//      }
//      return sum
//     }
//     console.log(word([1, 2, 3, 4, ]));
// }
// }


// {
//     // masala-6 //
//     let array = [5, 2, 3];

//     let result = [];

//     for (let i = 0, len = array.length; i < len; i++) {
//         result.push(array[i] ** 2);
//     }

//     console.log(result);
// }


// {
//     // masala-7 //
//     let array = [];
//     function son(n) {
//       for (let i = 1; i <= n; i++) {
//         array.push(i);
//       }
//       return array;
//     }
//     console.log(son(5));
// }


// {
//     // masala-8 //
//     function numbers(a, b) {
//         let result = [];
//         for (let sum = a; sum < b; sum++) {
//             if (sum % 2 === 0) {
//                 result.push(sum);
//             }
//         }
//         return result;
//     }
//     console.log(numbers(2, 9));
// }


// {
//     // masala-9 //
//     function letter(n) {
//         return n.charAt(0).toUpperCase() + n.slice(1);
//     }
//     console.log(letter("laylo"));
// }


// {
//     // masala-10 //
//     function string(str, n) {
//         return str.repeat(n).trim();
//     }
//     console.log(string(" salom", 3));
// }


// {
//     // masala-11 //
//     function numbers(array) {
//         return array.reverse();
//     }
//     console.log(numbers([1, 2, 3])); 
// }


// {
//     // masala-12 //
//     function numbers(array) {
//         return array.sort((n, i) => n - i);
//     }
//     console.log(numbers([2, 1, 13, 4]));
// }