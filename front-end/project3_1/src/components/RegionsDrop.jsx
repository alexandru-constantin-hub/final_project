import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function  RegionsDrop() {
    

    const [regions, setRegions] = useState(null);
    const [strFilter, setFilter] = useState('');
    const [binTrouve, setBinTrouve] = useState(false);
    
    const baseUrl = 'http://localhost:3050/regions';

     useEffect(() => {
         getAllRegions();
     },[]);

     const getAllRegions = () => {
         axios.get(baseUrl)
            .then(response => {
                 setRegions(response.data.regions);
             })
             .catch(error => {
                 console.log(error);
             });
    }

  
    const dropDownChange = (event) => {
        setFilter(event.target.value);
        console.log(event.target.value)
    }

 
    let binRegionsFound = regions ? regions.some( region=>region
        .toUpperCase()
        .includes(strFilter.toUpperCase())
        ) : false;

        
    if(!regions) return null

    return (
        <>
        <h1>Regions avec le liste avec dropdown</h1>
        <span>RSelecte le province sur la liste:&nbsp;&nbsp;</span>
        <select className="form-control mb-4" onChange={dropDownChange}>
            {regions.map(region => {
                return (
                    <option key={region}>{region}</option>
                )
            })}
        </select>
       
        <div>Liste des provinces conte- nant les lettres: {strFilter}</div>
                <ul className="list-group">
                    {regions.map(region => {
                        return (
                            region.toUpperCase().includes(strFilter.toUpperCase()) && (
                                <li key={region} className="list-group-item">{region}</li>
                            )
                            
                        ) 
                    })}
                    {!binRegionsFound && <li> No states found </li>}
                </ul>
            
        </>
    );
};

