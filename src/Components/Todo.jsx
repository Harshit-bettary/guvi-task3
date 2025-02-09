import { useState } from "react";

function Todo(){
    const [todos,setTodos]=useState([]);

    function handleSave(event){
        event.stopPropagation();
        const input_element= document.getElementById("task");
        setTodos([...todos,input_element.value]);
        input_element.value="";

        console.log(todos);
    }
    return(
        <>
        <h1 class="heading">Lets Build Todo App</h1>
        <div class="task-section">
            <label htmlFor="task">Task</label>
            <input id="task" />
            <button class="save-btn" onClick={handleSave}>Save</button>
        </div>
        <div>
            <ul>
                {todos.map((element,index )=>(
                     <li key={index} >{element}</li> 
                     
                     ))}
            </ul>
        </div>
        </>
    )
}
export default Todo;