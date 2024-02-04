
import{RecoilRoot} from "recoil"
import { Todos } from "./Components/Todos"
import {Filter} from "./Components/Filter"


// can use memo to prevent the rerenddering of all the todos 

// can use useMemo to store the filtered value and re evaluate only  when the input changes


function App() {
  
  return (
    <div>
     <RecoilRoot>
     <Todos/>
     <Filter/>
     </RecoilRoot>
    </div>
  )
}





export default App