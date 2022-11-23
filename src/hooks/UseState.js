import React, { useState, useEffect } from 'react'

const UseState = () => {

  const [data, setData] = useState(0)

  const increment = () => {
    setData (data + 1)
    console.log(data);
  }

  const decrement = () => {
    setData(data - 1)
    console.log(data)
  }

  useEffect(() => {
    document.title = `Jayant (${data})`
  }, [data])
  

  

  return (
    <>
        <div className="my-5 align-middle container d-flex justify-content-around">
          <button onClick={() => decrement()} type="button" className="btn btn-primary">Decrement</button>
          {data}
        <button onClick={() => increment()} type="button" className="btn btn-primary">Increment</button>
        </div>
    </>
  )
}

export default UseState