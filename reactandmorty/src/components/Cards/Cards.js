import React from 'react'
import styles from "./Cards.module.scss";
import { Link } from 'react-router-dom';

const Cards = ({results, page, items, setItems}) => {

    let display;
    

    if(results){
        display = results.map((x)=>{
            let {id, name, image, status, location, species} = x;
            

            return (
             <Link  style={{textDecoration: 'none'}} to = {`${page}${id}`} key={id} className="col-3 mb-4 text-dark">
                <div className={styles.cards}>
                    <img src={image} alt="" className={`${styles.img} img-fluid`}/>
                    <div style={{padding: "10px"}} className="content text-white">
                        <div className="fs-4 fw-bold mb-2">{name}</div>
                        <div className="">
                            <div className="fs-6">{species} - {status}  </div>
                            <div className="">Last location: {location.name}</div>
                        </div>
                    </div>
                </div>
                </Link>
            );
        }
        );
    } else {
        display = "No Characters Found"
    }
    return (
    <div className="row d-flex justify-content-center">{display}</div>
    )
}

export default Cards