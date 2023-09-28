const todos=document.getElementById('todos');
const form=document.getElementById('form');
const title=document.querySelector('[title]');

const LCTodo=JSON.parse(localStorage.getItem('todoes'));
if(LCTodo)
{
    LCTodo.forEach(todo=>{
        createTodo(todo)
    })
}
function createTodo(name)
{
    let todoText=title.value;
    if(name){
        todoText=name.text;
    } 
    if (todoText)
    {
        const todoEl=document.createElement('li');
        if(name && name.completed)
        {
            todoEl.classList.add('completed');
        }
        
        todoEl.innerText=todoText;
        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed');
            LocalStorageUp();
        })
        todoEl.addEventListener('contextmenu',
        (e)=>{
            e.preventDefault();
            todoEl.remove();
            LocalStorageUp();
        })
        todos.appendChild(todoEl);
        console.log( title);
        console.log(todoEl);
        title.value="";
    }
};
function LocalStorageUp()
{
   
    const todos=document.querySelectorAll('li');
    let todos_l=[];
    todos.forEach((todo)=>{
        todos_l.push({
            text:todo.innerText,
            completed:todo.classList.contains('completed'),
        });
    })
    localStorage.setItem('todoes',JSON.stringify(todos_l))
}
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    //todo_title=title.value;
    createTodo();
    LocalStorageUp()
})

document.querySelector('[conbutton]').onclick=()=>
{

    //todo_title=title.value;
    createTodo ();
    LocalStorageUp()
}



