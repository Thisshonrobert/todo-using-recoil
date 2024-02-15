
import{RecoilRoot} from "recoil"
import { Todos } from "./Components/Todos"



// can use memo to prevent the rerenddering of all the todos if the input is not changed

// can use useMemo to store the filtered value and re evaluate only  when the input changes


function App() {
  
  return (
    <div>
     <RecoilRoot>
     <Todos/>
     </RecoilRoot>
    </div>
  )
}





export default App
