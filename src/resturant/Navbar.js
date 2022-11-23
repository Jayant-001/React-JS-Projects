import React from 'react'


const Navbar = ({ filterData, menuList }) => {

    return (
        <div className='d-flex justify-content-around my-3'>
            {menuList.map((value) => {
                return (
                    <button onClick={() => filterData(value)} key={value} type="button" className="btn btn-secondary">{value}</button>
                )
            })}
        </div>
    )
}

export default Navbar