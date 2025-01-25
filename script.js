let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');

//local storage - used to save key-value pairs in the browser(our computer).
//              - the data is not deleted when the browser is closed, and are available for future sessions.


let todos = [];  //to store input value(todo) in an array, particularly for local-storage purpose.

window.onload = () =>{ //window.onload used to execute a script once webpage has completely loaded all content.
    //  console.log('loaded')
    todos = JSON.parse(localStorage.getItem('todos')) || [] // fetching the items in the local-storage and converting items(string)
                                                   //   into array(parse) or nothing else means store empty array.
    todos.forEach(todo => addtodo(todo))

      }

button.addEventListener('click',()=>{ //for add button
    todos.push(input.value)   //pushing the input value to add in an array
    console.log(todos)
    localStorage.setItem('todos',JSON.stringify(todos))  //converting todos[]-array into string and stores values in local storage.
    addtodo(input.value)
    input.value=''// clear the value in input box after entering the value

})


function addtodo(todo){  //for displaying the value
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{  // to remove(line-through) the value
        para.style.textDecoration = 'line-through' 
        remove(todo)   // to remove the value in an array 

    })
    para.addEventListener('dblclick',()=>{  // to remove(permanently) the value
        todoList.removeChild(para) 
        remove(todo)   // to remove the value in an array 
  
     })  
}

function remove(todo){
    let index =  todos.indexOf(todo)    //find the position of todos
      if(index>-1)  {       // the index became -1 if already deleted the value(todo). so we create this loop
          todos.splice(index,1)      //it deletes 1 element starting at index-position(eg.,1,3)
      }
       localStorage.setItem('todos',JSON.stringify(todos))

}




