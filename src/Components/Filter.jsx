
import {filterAtom,filteredTodos} from "./store/atoms/Count"
import{useSetRecoilState,useRecoilValue} from "recoil"
import _debounce from 'lodash/debounce';

export default function Filter(){
    const setFilter = useSetRecoilState(filterAtom)
    const filtered = useRecoilValue(filteredTodos);
    function applyFilter(){
      setFilter(document.getElementById("filter").value)
    }
  const debouncedApplyFilter = _debounce(applyFilter, 300);
    return(
      <div>
         <button onClick={debouncedApplyFilter}>filter</button>
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