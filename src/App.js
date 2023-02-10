import "./index.css";
import Employee from "./compoents/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Unknown");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      named: "Caleb",
      role: "Manager",
      img: "https://images.pexels.com/photos/5685971/pexels-photo-5685971.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,

      named: "Daniel",
      role: "Designer",
      img: "https://images.pexels.com/photos/15394009/pexels-photo-15394009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,

      named: "Adrian",
      role: "Intern",
      img: "https://images.pexels.com/photos/15349103/pexels-photo-15349103.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,

      named: "Chris",
      role: "Developer",
      img: "https://images.pexels.com/photos/15312635/pexels-photo-15312635.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,

      named: "Sheila",
      role: "Content Director",
      img: "https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 6,

      named: "Dominic",
      role: "Socials",
      img: "https://images.pexels.com/photos/15478288/pexels-photo-15478288.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, named: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;

  return (
    <div className="App ">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.named}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h3>You can not view the employees</h3>
      )}
    </div>
  );
}

export default App;
