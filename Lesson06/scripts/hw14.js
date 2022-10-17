console.log("Hello, World!");

//Реалізуйте функцію generateKey(length, characters), яка повертає рядок 
//випадкових символів із набору characters довжиною length. span>


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 


function generateKey(lengthRandomArrey, string){
   const randomArrey=[];
   const stringToArrey = string.split('');
   
   for(i = 0; i < lengthRandomArrey ; i++ ) {

    randomArrey.push(stringToArrey[Math.floor(Math.random() * stringToArrey.length)]);
    console.log(randomArrey);
   }
   return (randomArrey.join(''));
};