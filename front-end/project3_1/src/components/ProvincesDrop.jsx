import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegionsDrop from './RegionsDrop';

export default function  ProvincesDrop() {
    

    const [provinces, setProvinces] = useState(null);
    const [strFilter, setFilter] = useState('');
    const [binTrouve, setBinTrouve] = useState(false);
    const [show, setShow] = useState(false);
    
    const baseUrl = 'http://localhost:3050/provinces';

     useEffect(() => {
         getAllProvinces();
     },[]);

     const getAllProvinces = () => {
         axios.get(baseUrl)
            .then(response => {
                 setProvinces(response.data.provinces);
             })
             .catch(error => {
                 console.log(error);
             });
    }

    let binProvincesFound = provinces ? provinces.some( province=>province
        .toUpperCase()
        .includes(strFilter.toUpperCase())
        ) : false;
    

    const dropDownChange = (event) => {
        setFilter(event.target.value);
        console.log(event.target.value)
    }

        
    if(!provinces) return null

    return (
        <>
        <h1>Selecte le province sur la liste avec dropdown et button</h1>
        <select className="form-control mb-4" onChange={dropDownChange}>
            {provinces.map(province => {
                return (
                    <option key={province}>{province}</option>
                )
            })}
        </select>
            <ul className="list-group">
                    {provinces.map(province => {
                        return (
                            province.toUpperCase().includes(strFilter.toUpperCase()) && (
                                <li key={province} className="list-group-item">{province}</li>
                            )
                            
                        ) 
                    })}
                    {!binProvincesFound && <li> No states found </li>}
                </ul>
        <button className="btn btn-primary mt-4 mb-4" onClick={() => setShow(prev => !prev)}>Afiche ou pas le regions</button>
        <div className='display-block'>
            {show &&  <RegionsDrop />}
        </div>  
         
            
           
           
        </>
    );
};

