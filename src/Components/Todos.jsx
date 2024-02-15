import {todosAtom} from "../store/atoms/Count"
import { useState } from "react"
import{ useRecoilState} from "recoil"
import {Filter} from "../Components/Filter"

let Id = 1;
export function Todos(){
    const [todos,setTodos] = useRecoilState(todosAtom)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    function addTodo(){
       setTodos([
        ...todos,{
          id:Id++,
          title:title,
          description:description
        }
       ])
    }
    
    
    return(
      <div>
       <input  placeholder="title" onChange={e=> setTitle(e.target.value)}></input>
       <input placeholder="description" onChange={e=> setDescription(e.target.value)}></input>
       <button onClick={addTodo}>add todo</button><br></br>
       <input id="filter" placeholder="filter" ></input>
       
       <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}`}
            </li>
          ))}
        </ul>
        <Filter/>
       
      </div>
    )
  }
