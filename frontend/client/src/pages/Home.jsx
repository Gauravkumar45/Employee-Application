import React, {useState,useEffect} from 'react'

function ApiDjango()
{   
    const[enames,setnames]=useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api//restapi/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(resp=>resp.json()).then(resp=>setnames(resp)).then(error=>console.log(error))
    },[])

    return(
        <div>
            <center>
                <h1>Employee Records</h1>
                <hr/>
                <select>
                    <option selected disabled="true">-- Select Employee --</option>
                    {
                        enames.map(emplist=>{
                            return(
                                <option title={emplist.id}>{emplist.firstname}</option>
                            )
                        })
                    }
                </select>
            </center>
        </div>
    );
}
export default ApiDjango;