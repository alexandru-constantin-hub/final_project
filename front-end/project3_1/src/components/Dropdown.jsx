import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dropdown() {
    
    const [regions, setRegions] = useState(null);
    const [strFilter, setFilter] = useState('');

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
    
if(!regions) return null

    return (
        <>

        <h1>Regions et province avec le liste dropdown</h1>
        <span>Selecte le province sur la liste:&nbsp;&nbsp;</span>
        <select className="form-control mb-4" onChange={dropDownChange}>
        <option></option>
            {regions.map(region => {
                return (
                    
                    <option key={region}>{region}</option>
                )
            })}
        </select>
        {console.log(strFilter)};
        {(strFilter == "Atlantique") &&
        <select className="form-control mb-4">
            <option>Terre-Neuve-Et-Labrador</option>
            <option>Ile-du-Prince-Édouard</option>
            <option>Nouvelle Écosse</option>
            <option>Nouveau-Brunswick</option>
        </select>
        }
        {(strFilter == "Centre") &&
        <select className="form-control mb-4">
            <option>Ontario</option>
            <option>Quebec</option>
        </select>
        }
         {(strFilter == "Prairies") &&
        <select className="form-control mb-4">
            <option>Manitoba</option>
            <option>Saskatechewan</option>
            <option>Alberta</option>
        </select>
        }
        {(strFilter == "Cote-Ouest") &&
        <select className="form-control mb-4">
            <option>Colombie Britannique</option>
        </select>
        }
          {(strFilter == "Territoires du Nord") &&
        <select className="form-control mb-4">
            <option>Nunavut</option>
            <option>Territoires du Nord-Ouest</option>
            <option>Yukon</option>
        </select>
        }

        </>

    );

}