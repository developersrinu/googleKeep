import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

import './styles/Sidebar.css'
import { FaRegTrashAlt } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className='sideBar'>
        <div style={{display:'flex'}} className='dd1' id='kk'>
            <div><FaLightbulb/></div>
            <div>Notes</div>
        </div>

        <div style={{display:'flex'}} className='dd'>
            <div><FaBell/></div>
            <div>Reminder</div>
        </div>

        <div style={{display:'flex'}} className='dd'>
            <div><FaEdit/></div>
            <div>Edit label</div>
        </div>

        <div style={{display:'flex'}} className='dd'>
            <div><FaMedal/></div>
            <div>Archive</div>
        </div>

        <div style={{display:'flex'}} className='dd'>
            <div><FaRegTrashAlt/></div>
            <div>Bin</div>
        </div>
    </div> 
  )
}

export default SideNav