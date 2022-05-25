import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function  Provinces() {
    

    const [provinces, setProvinces] = useState(null);
    const [strFilter, setFilter] = useState('');
    const [binTrouve, setBinTrouve] = useState(false);
    
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

    if(!provinces) return null

    return (
        <div>
            <ul>
                {provinces.map(province => {
                    return (
                        <li key={province}>{province}</li>
                    ) 
                })}
            </ul>
        </div>
    );
};

