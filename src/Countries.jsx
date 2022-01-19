import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const countries = (props) => {

console.log('first',props.country)
const data = (props.country)
// console.log('data', data)

    let countryList = data.map(items  => {
        return(
            <div className='listCountry' key={items?.CountryCode}>
            <p>
                <Link to={'/data/'+ items?.Slug} style={{color: 'black'}}>{items?.Country}</Link>
                </p>
            </div>
        )
    })


    return (
        <div id='countries'>
           {countryList}
        </div>
    )
}

export default countries
