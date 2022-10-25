console.log("Hello, World!");

//Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//Ступінь передається як другий аргумент у функцію
//
//pow (num, degree)


function pow (num , degree) {
    console.log(num , degree);
   if ( degree < 0 && degree + 1 !=0) {
        return (1 / ( num * pow (num , degree + 1))); 
    }
 
    if(degree === 0){
    return  1; 
    }
    
    if (degree > 1) {
       return num * pow (num , degree - 1) ; 
    } 
    return  num;
}

console.log (pow(2 , 4));