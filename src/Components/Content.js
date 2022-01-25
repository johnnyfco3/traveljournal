import React from "react";
import { HiLocationMarker } from 'react-icons/hi'

export function Content({element}){
    return(
        <div className="content">
            <img src={element.image} 
            alt="Location"/>
            <div className="details">
                <div className="top-content">
                    <i className="icon"><HiLocationMarker /></i><h2>{element.location}</h2> 
                    <a href={element.link} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1>{element.title}</h1>
                <b>{element.start} - {element.end}</b>
                <p>{element.description}</p>
            </div>
        </div>
    );
}

export default Content;