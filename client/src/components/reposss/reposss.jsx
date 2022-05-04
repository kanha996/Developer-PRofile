import React, { useState } from 'react'
import "./reposs.css"
import Separator from '../separator-line/separator';

export default function Repo({prop}){

    const[name,setName] = useState("");
    const[update,setUpdate] = useState("");
    const[desc,setDesc] = useState("")

    return(
        <div className='repo-item'>
            <Separator/>
            <div className='repo-wrapper'>
                <div className='repo-header'>
                    <div className='repo-name'>{name}</div>
                    <img src={require("../assets/Icons _ Illustrations/north_east-24px.svg")} className="repo-link"></img>
                    <div className='update-detail'>Updated at {update}</div>
                </div>

                <div className='repo-desc'>{desc}</div>
            </div>

        </div>
    )
}