import React, { useEffect, useState } from 'react'

const CoffeeList = () => {
    const [data, setData] = useState(null)
    const [updateCoffees, setUpdateCoffees] = useState(false)

    useEffect(() => {
        console.log("fetching")
        fetch('/coffees')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setData(res.coffees)
            })
        return () => {
            setUpdateCoffees(false)
        }
    }, [updateCoffees])

    return (
        <div className="coffeeList">
            {
                data ? (
                    data.map((coffee) => {
                        return (
                            <div className="coffees" key={coffee.name}>
                                <h3 onClick={() => { }}>{coffee.name}</h3>
                                <p>{coffee.flavor}</p>
                                <p>{coffee.category}</p>
                            </div>
                        )
                    }))
                    : (
                        <p>Loading...</p>
                    )}
        </div >
    )
}

export default CoffeeList;