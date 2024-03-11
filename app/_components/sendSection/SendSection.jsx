'use client'
import Image from 'next/image'
import './sendSection.css'
import { MdOutlineInfo } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { allData , enitiyConnected , enitiyNoConnected ,personalNoConnected } from '@/data';
import { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";

const SendSection = () => {
  const [dataaa , setDataaa] = useState(allData);
  const [value , setValue] = useState('all');
  const [open , setOpen] = useState(false);
  function isOpen(){
    setOpen(!open)
  }

   useEffect(() =>{
        if (value == 'all'){
        setDataaa(allData)
      }else if (value == 'Enitity Connected'){
        setDataaa(enitiyConnected)
        }else 
        if (value == 'Entity noconnected'){
          setDataaa(enitiyNoConnected)
          }else{
            setDataaa(personalNoConnected)
          }
      
   } , [value])

  return (
    <>
    <div class="dropdown">
    <button class="dropbtn" onClick={isOpen}>
      Choose Your Status
    <FaChevronDown />
      </button>
   {open &&   <div class="dropdown-content">
      <button onClick={() => setValue("all")}>All</button>
      <button onClick={() => setValue("Enitity Connected")}>Enitity Connected</button>
      <button onClick={() => setValue("Entity noconnected")}>Entity noconnected</button>
      <button onClick={() => setValue("Personal NoConnected")}>Personal NoConnected</button>
    </div>}
  </div>
    <div className='send-contents'>
        {dataaa.map(data =>{
            return(
<div className="send-section">
        <div className="content-up">
        <div className="content-up-left">
        <Image src = {data.img} alt='entityConnected' />
            <h2>{data.title}</h2>
        </div>
        <div className="content-up-right">
            <p>10-Oct-2022 02:45 PM</p>
            <MdOutlineInfo/>
            <FaRegTrashAlt/>
            <CiMenuKebab/>
        </div>
        </div>

       <p className='p'>Viverra gravida proin sit integer non. Mattis amet ultricies id tempor. Lectus tortor, et viverra amet enim. Libero, a orci tincidunt pellentesque nulla dolor non. At lorem lacus lobortis est etc. Vitae
etiam congue dui imperdiet sit. Pellentesque ultricies ultrices nec urna. Odio convallis et sed risus iaculis a adipiscing justo vel. Sed quis adipiscing ullamcorper risus Sed quis adipiscing
ullamcorper.</p>
     </div>
            )
        })}
     </div>
    </>
    

  )
}

export default SendSection
