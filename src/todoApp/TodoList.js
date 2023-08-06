import React, { useEffect, useState } from "react";
import "../todoApp/Todo.css";
const getLocalItems=()=>{
    let list = localStorage.getItem("list");
    console.log(list)
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }

}
const TodoList = () => {
  const [input, setInput] = useState("");
  const [allData, setAllData] = useState(getLocalItems());
//   const [list,setList]=useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData();
  };

  const setData = () => {
    if (input.trim() === "") {
      alert("input should not be empty");
    } else {
      setAllData([...allData, input]);
      setInput("");
      
      console.log(allData);
    }
  };
  const deleteItem = (index) => {
    const filterItem = allData.filter((data, ind) => {
      return index !== ind;
    });
    setAllData(filterItem);
  };
  const deleteAll = () => {
    setAllData([]);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(allData));
  }, [allData]);
  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="enter an item"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="add" onClick={handleSubmit}>
              Add Item
            </button>
            <div className="showItems">
              {allData
                ? allData.map((data, index) => (
                    <div className="each-item" key={index}>
                      <h4>{data}</h4>
                      <button className="del" onClick={() => deleteItem(index)}>
                        Delete
                      </button>
                    </div>
                  ))
                : ""}

              <div className="del-all">
                <button className="del" onClick={deleteAll}>
                  Delete All
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoList;
