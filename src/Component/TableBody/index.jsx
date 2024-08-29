import React from "react";

function TableBody({ data,update, deleteFn }) {
  return (
    <thead>
      {data?.length > 0
        ? data.map((list, index) => (
            <tr key={list.no}>
              <td>{list.no}</td>
              <td>{list.name}</td>
              <td>{list.email}</td>
              <td>{list.phone}</td>
              <td>
                <div className="btn-group">
                  <button onClick={()=>update(list)}>update</button>
                  <button onClick={()=>deleteFn(list)}>Delete</button>
                </div>
              </td>
            </tr>
          ))
        :  <tr>
          <td colSpan={5}>
              No Data Found
          </td>
          </tr>}
    </thead>
  );
}

export default TableBody;
