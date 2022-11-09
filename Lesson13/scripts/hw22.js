console.log ("Hello, World!");
//ДЗ 22. Таблиця
//Вивести на сторінку таблицю 10 × 10, заповнену числами 
//від 1 до 100 (таблиця створюється за допомогою JavaScript).

//У HTML файлі для тих, хто забув, наведено приклад, як 
//виглядає структура таблиці

const addTable = document.querySelector(".container");
addTable.innerHTML= `<table></table>` ;

let outputNumber = 1

for (let i = 1; i <= 10; i ++){
     let row = document.createElement(`tr`) ;
     row.innerHTML = `<tr></tr>`;
        for (let j = 1; j <= 10; j ++){
            let column = document.createElement(`td`) ;  
            column.innerHTML = `<td>${outputNumber}</td>`;
            outputNumber +=1
            addTable.appendChild(column)
    }
    addTable.appendChild(row)
}