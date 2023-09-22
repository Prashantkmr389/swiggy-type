

import React from 'react';
import { useState, useEffect} from 'react';

const NewComponent = () => {
    const [dataarr, setDataarr] = useState([]);
    
    async function getdata(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await data.json();
        setDataarr(response);
        console.log(response)
    }
    useEffect(() =>{
        getdata();
    }, [])
    
    return (
      <div>
        
          <table className="table-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Street</th>
              </tr>
            </thead>

            <tbody>
                {
                    dataarr.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address.street}</td>
                          </tr>
                        );
                    })

                }
              
            </tbody>
          </table>
        
      </div>
    );
}

export default NewComponent;