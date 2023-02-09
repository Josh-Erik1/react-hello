import "./index.css";
import Employee from "./compoents/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Unknown");
  const showEmployees = true;

  return (
    <div className="App bg-slate-200">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Josh" role="intern" />
          <Employee name="Jack" role={role} />
          <Employee name="John" />
        </>
      ) : (
        <h3>You can not view the employees</h3>
      )}
    </div>
  );
}

export default App;
