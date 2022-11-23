import React, { useState, useEffect } from "react";

// get local storage data
const getLocalData = () => {
  const list = localStorage.getItem("myTodoList");

  if(list) {
    return JSON.parse(list)
  }
  return []
}

const Todo = () => {

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData);

  const addItem = () => {
    const input = inputData.trim();
    if (input.length < 1) {
      alert("Input box is empty");
      return;
    }

    const newItem = {
      id: new Date().getTime().toString(),
      name: input,
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setInputData("");
  };

  const updateItem = (id) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) setInputData(items[i].name)
    }


    console.log(id)

  }

  const deleteItem = (curId) => {
    const updatedList = items.filter((item) => {
      return item.id !== curId
    })

    setItems(updatedList)
  }

  const clearAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items))
  }, [items])

  return (
    <>
      <div className='my-4 d-flex justify-content-center'>
        <div>
          <img
            className='rounded mx-auto d-block'
            width={60}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M6SzMy82SMHPAcWvpDIZoTiPKYXvhxnswA&usqp=CAU'
            alt='image'
          />
          <div className='d-flex justify-content-center'>
            <h3>Add your list here</h3>
          </div>

          {/* Add item field */}
          <div className='d-flex justify-content-center"'>
            <div className='input-group mb-3'>
              <input
                onChange={(changeValue) => {
                  setInputData(changeValue.target.value);
                }}
                value={inputData}
                type='text'
                className='form-control'
                placeholder='Add items'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
              <div className='input-group-append'>
                <button
                  onClick={() => addItem()}
                  className='btn btn-outline-secondary'
                  type='button'
                >
                  <i className='fa fa-plus add-btn'></i>
                </button>
              </div>
            </div>
          </div>

          {/* List Items */}
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className=' my-3 d-flex justify-content-center'
              >
                <h3 className='mx-2'>{item.name}</h3>
                <button
                  onClick={() => updateItem(item.id)}
                  className='mx-1 btn btn-outline-success'
                  type='button'
                >
                  <i className='fa-solid fa-pen-to-square'></i>
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className='mx-1 btn btn-outline-danger'
                  type='button'
                >
                  <i className='fa-solid fa-trash'></i>
                </button>
              </div>
            );
          })}

          {/* Clear all items */}
          <div className='d-flex justify-content-center'>
            <button
              onClick={clearAll}
              type='button'
              className='btn btn-danger'
            >
              Clear List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default Todo;