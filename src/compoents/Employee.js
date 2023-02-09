function Employee(props) {
  return (
    <>
      <h3 className="text-3x">Employee name is {props.name}</h3>
      <p>{props.role ? props.role : "No role"}</p>
    </>
  );
}

export default Employee;
