console.log("Hello, World!");

//Реалізуйте функцію generateKey(length, characters), яка повертає рядок 
//випадкових символів із набору characters довжиною length. 

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 

function generateKey(lengthRandomArrey, string){
   //const randomArrey=[];
   //const stringToArrey = string.split('');
   let  stringRandom="";
   
   for(let i = 0; i < lengthRandomArrey ; i++ ) {
    stringRandom = stringRandom + string.charAt(Math.random() * string.length);

    //randomArrey.push(]);
    console.log(stringRandom);
   }
   return stringRandom;
};