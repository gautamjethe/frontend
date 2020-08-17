import React, { useEffect, useState } from "react";
import './style.css';
import { Checkbox } from 'pretty-checkbox-react';
import 'pretty-checkbox'
import Avatar from '../avatar/index'


const AvatarSelector = ({nameID,index,peersAddCallback,peersRemoveCallback,checkReset,checkCallback}) => {

  const [checked, setChecked] = useState(false);
  const [name,setName] = useState("")


 
  const handleChange = React.useCallback((e) => {
    document.getElementById(nameID).style.border = document.getElementById(nameID).style.border == "3px solid rgb(22, 186, 197)" && !checked?"3px solid rgb(199 199 199)":"3px solid #16BAC5";
    console.log( document.getElementById(nameID),document.getElementById(nameID).style.border);
    setChecked(prev => !prev);
    setName(e.target.name)
  }, []);

  useEffect(()=>{
    setChecked(false)
    document.getElementById(nameID).style.border = document.getElementById(nameID).style.border == "3px solid rgb(22, 186, 197)" && !checked?"3px solid rgb(199 199 199)":"3px solid #16BAC5";
    checkCallback()
  },[checkReset])

  useEffect(()=>{
    setChecked(false)
    document.getElementById(nameID).style.border = document.getElementById(nameID).style.border == "3px solid rgb(22, 186, 197)" && !checked?"3px solid rgb(199 199 199)":"3px solid #16BAC5";
    checkCallback()
  },[])

  useEffect(() => {
      if (checked) {
        peersAddCallback(name)
      } else{
        peersRemoveCallback(name)
      }
  }, [checked]);

  return (
    <div className="selector-wrapper" id={nameID}>
    <Checkbox state={checked} name={nameID} className="pretty state p-success
state p-success p-svg p-round p-pulse" onChange={handleChange}>
    <div clasName="state p-success">
        <svg className="svg svg-icon" viewBox="0 0 20 20">
                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style={{stroke: "white", fill: "white" }}></path>
            </svg>
        </div>
    </Checkbox>
    {/* <div class="pretty  p-svg p-round p-pulse">
        <input type="checkbox" />
        <div class="state p-success">
        <svg class="svg svg-icon" viewBox="0 0 20 20">
                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style={{stroke: "white", fill: "white" }}></path>
            </svg>
            <label></label>
        </div>
    </div> */}
      <Avatar nameID={nameID}  index={index}/>
    </div>
  )
}

export default AvatarSelector