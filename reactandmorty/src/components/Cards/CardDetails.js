import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    let {id} = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, origin, location, gender, species, status, type} = fetchedData


    let api =`https://rickandmortyapi.com/api/character/${id}`

    useEffect(()=>{

        (async function(){
          let data = await fetch(api).then(res=>res.json());
          updateFetchedData(data)
        })()
      },[api] )

      console.log(id)
      
    
  return (
    <div  className='container d-flex justify-content-center text-white'>
        <div className="d-flex flex-column gap-3">
            <h1 className="text-center">{name}</h1>
            <img src={image} alt="" className="img-fluid"></img>
            <div className="content">
                <div className="">
                    <span className="fw-bold">
                        Status : 
                        
                    </span>
                    {status}
                </div>
                <div className="">
                    <span className="fw-bold">
                        Species :
                        
                    </span>
                    {species}
                </div>
                <div className="">
                    <span className="fw-bold">
                        Gender :
                        
                    </span>
                    {gender}
                </div>
                <div className="">
                    <span className="fw-bold">
                        Type :
                        
                    </span>
                    {type === ""? "Unknown" : type} 
                </div>
                <div className="">
                    <span className="fw-bold">
                        Origin :
                       
                    </span>
                    {origin?.name}
                </div>
                <div className="">
                    <span className="fw-bold">
                        Location :
                        
                    </span>
                    {location?.name}
                </div>
            </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>



        </div>
    </div>
  )
}

export default CardDetails