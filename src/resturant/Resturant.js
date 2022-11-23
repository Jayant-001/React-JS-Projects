import React, { useState } from 'react'
import FoodItem from './FoodItem'
import Menu from './MenuApi'
import Navbar from './Navbar'

const getCategory = ["all", ...new Set(Menu.map((element) => {
    return element.category
}))]

// console.log(getCategory)

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(getCategory)

    const filterData = (category) => {
        if (category === "all") { setMenuData(Menu); return; }

        const filteredData = Menu.filter((element) => {
            return element.category === category;
        })

        setMenuData(filteredData)
    }

    return (
        <>
            {/* <nav className='mx-5 my-3'>
                <div className="d-flex justify-content-around">
                    <button onClick={() => setMenuData(Menu)} type="button" className="btn btn-dark">All</button>
                    <button onClick={() => filterData("breakfast")} type="button" className="btn btn-primary">Breakfast</button>
                    <button onClick={() => filterData("lunch")} type="button" className="btn btn-secondary">Lunch</button>
                    <button onClick={() => filterData("evening")} type="button" className="btn btn-success">Evening</button>
                    <button onClick={() => filterData("dinner")} type="button" className="btn btn-danger">Dinner</button>
                </div>
            </nav> */}

            <Navbar filterData={filterData} menuList={menuList} />
            <FoodItem menu={menuData} />

        </>

    )
}

export default Resturant