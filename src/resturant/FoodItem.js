import React from 'react'

const FoodItem = ({ menu }) => {
    const image = "http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
    
    return (
        <>
            {menu.map((foodData) => {
                const { id, name, description, category } = foodData;
                return (
                    <div key={id} className="row row-cols-1 row-cols-md-3 g-4 m-1">
                        <div className="col-6">
                            <div className="card">
                                <span className="position-absolute top-0 mx-2 translate-middle badge rounded-pill bg-danger">
                                    {id}
                                </span>
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <h6>{category}</h6>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </>
    )
}

export default FoodItem