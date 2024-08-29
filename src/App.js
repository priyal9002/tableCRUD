import { useState } from "react";
import "./App.css";
import TableBody from "./Component/TableBody";
import Form from "./Component/Form";

function App() {
  const [table, setTable] = useState([]);

  const [open, setOpen] = useState(false);
  const [singleValue, setSingleValue] = useState({});

  const handlerAdd = (data) => {
  
    if (Object.entries(singleValue).length) {
      const Findindex = table.findIndex((el) => el.no === data.no);
      setTable((prev) => {
        const newState = [...prev];
        newState[Findindex] = data;
        return newState;
      });
      setSingleValue({});
      setOpen(false);
    } else {
      setTable((prev) => [...prev, { no: prev.length + 1, ...data }]);
      setOpen(false);
    }
  };

  const handlerUpdate = (val) => {
    setSingleValue(val);
    setOpen(true);
  };

  const handlerDelete = (val) => {
    setTable(table.filter((el) => el.no !== val.no));
  };

  return (
    <div className="App">
      <div className={"w-half"}>
        <button onClick={() => setOpen(!open)}>
          {Object.entries(singleValue).length > 0 ? "update" : "Add"}
        </button>
        {open && <Form submit={handlerAdd} singleValue={singleValue} />}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <TableBody
          data={table}
          update={handlerUpdate}
          deleteFn={handlerDelete}
        />
      </table>
    </div>
  );
}

export default App;
