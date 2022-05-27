import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Regions from './Regions';

export default function  Provinces() {
    

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

   const handleChange = (event) => {
        setFilter(event.target.value);
        console.log(event.target.value)
    }


 
    let binProvincesFound = provinces ? provinces.some( province=>province
        .toUpperCase()
        .includes(strFilter.toUpperCase())
        ) : false;

        
    if(!provinces) return null

    return (
        <>
        <h1>Provinces contenant les lettres avec le button pour regions</h1>
        <input placeholder="Province" type="text" id="filtreId" value={strFilter} onChange={handleChange} />
        <div>Liste des provinces conte- nant les lettres: {strFilter}</div>
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
            {show &&  <Regions />}
        </div>  
         
            
           
           
        </>
    );
};

