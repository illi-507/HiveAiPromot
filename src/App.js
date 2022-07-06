import logo from "./logo.svg";
import "./App.css";
import MultiSelectDropdown from "./MultiSelectDropdown";
function App() {
  return (
    <div style={{display:"flex"}}>
         <div style={{display:"flex", flexDirection:"column"}}> 
        <div>Multi select dropdown:</div>
        
        <MultiSelectDropdown  />
        </div>
   <br /><br/>
   <div style={{display:"flex", flexDirection:"column"}}> 
      <div>Single select dropdown:</div>
      <MultiSelectDropdown singleSelect />
      </div>
    </div>
  );
}

export default App;
