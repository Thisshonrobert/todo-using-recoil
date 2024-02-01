import { useState } from "react"
import{RecoilRoot, useRecoilState, useSetRecoilState,useRecoilValue} from "recoil"
import { filterAtom, filteredTodos, todosAtom } from "./store/atoms/Count";
import _debounce from 'lodash/debounce';
let Id = 1;
// can use memo to prevent the rerenddering of all the todos 

// can use useMemo to store the filtered value and avoid re evaluating it


function App() {
  
  return (
    <div>
     <RecoilRoot>
     <Todos/>
     </RecoilRoot>
    </div>
  )
}
function Todos(){
  const [todos,setTodos] = useRecoilState(todosAtom)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const setFilter = useSetRecoilState(filterAtom)
  const filtered = useRecoilValue(filteredTodos);
  function addTodo(){
     setTodos([
      ...todos,{
        id:Id++,
        title:title,
        description:description
      }
     ])
  }
  function applyFilter(){
      setFilter(document.getElementById("filter").value)
  }
  const debouncedApplyFilter = _debounce(applyFilter, 300);
  
  return(
    <div>
     <input  placeholder="title" onChange={e=> setTitle(e.target.value)}></input>
     <input placeholder="description" onChange={e=> setDescription(e.target.value)}></input>
     <button onClick={addTodo}>add todo</button><br></br>
     <input id="filter" placeholder="type what you want to filter" ></input>
     <button onClick={debouncedApplyFilter}>filter</button>
     <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}`}
          </li>
        ))}
      </ul>
      {
        filtered.map((filteredOne)=>(
          <li key={filteredOne.id}>
            {`ID: ${filteredOne.id}, Title: ${filteredOne.title}, Description: ${filteredOne.description}`}
          </li>
        ))
      }
    </div>
  )
}



export default App