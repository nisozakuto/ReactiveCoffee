import React, { useEffect, useState } from 'react'

const CoffeeList = () => {
    const [data, setData] = useState(null)
    const [updateCoffees, setUpdateCoffees] = useState(false)

    useEffect(() => {
        console.log("fetching")
        fetch('/coffees')
            .then((res) => res.json())
            // .then((res) => console.log(res))
            .then((res) => {
                console.log(res)
                setData(res.coffees)
            })
        return () => {
            setUpdateCoffees(false)
        }
    }, [updateCoffees])

    return (
        <div>
            {
                data ? (
                    data.map((coffee) => {
                        return (
                            <div className="coffees" key={coffee.name}>
                                <p>{coffee.name}</p>
                                <p>{coffee.flavor}</p>
                                <p>{coffee.category}</p>
                            </div>
                        )
                    }))
                    : (
                        <p>Loading</p>
                    )}
        </div>
    )
}
export default CoffeeList;