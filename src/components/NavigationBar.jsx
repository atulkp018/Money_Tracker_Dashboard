import { MoveLeft } from 'lucide-react'
import React from 'react'
import Logo from "./../assets/Logo.png"
import {LayoutDashboard, Clock3,BarChart2,ArrowRightLeft,HelpCircle} from 'lucide-react'
import { useState } from 'react'
import rightArrow from './../assets/icons/rightArrow.svg';
import {motion} from 'framer-motion';

const navLinks=[
  {
    name:"Dashboard",
    icon:LayoutDashboard,
  },
  {
    name:"Activity",
    icon:Clock3,
  },
  {
    name:"Analytics",
    icon:BarChart2,
  },
  {
    name:"Transaction",
    icon:ArrowRightLeft,
  },
  {
    name:"Help Center",
    icon:HelpCircle,
  }

]
  
const variants = {
  expanded : {width : "20%"},
  nonExpanded : {width : "5%"}
}
function NavigationBar() {
  const [activeNavIndex,setActivNavIndex]=useState(0);
  const [isExpanded,setisExpanded] = useState(true);

  return (
    <motion.div
     animate = {
      isExpanded ? " expanded" : "nonExpanded"}
      variants={variants}
     className={'flex flex-col py-12 border border-r-1 w-1/5 h-screen relative'+(isExpanded ? " px-10 " : " px-4 ")}>
        <div className='logo-div flex space-x-3 items-center'>
          <img src={Logo}/>
          <span className={isExpanded ? 'block' : 'hidden'}>Money Tracker</span>
        </div>

        <div 
        onClick={()=>setisExpanded(!isExpanded)}
        className='w-5 h-5 bg-[#FF8C8C] rounded-full absolute -right-[9.5px] top-15 flex items-center justify-center'>
          <img src={rightArrow} className='w-[6px]'/>

        </div>

        <div className='mt-9 flex flex-col space-y-8'>
          {navLinks.map((item,index)=>
           <div key={index}
            className={'flex space-x-3 p-2 rounded'+ (activeNavIndex=== index 
              ? "  bg-[#FF8C8C] text-white font-semibold " : " ")
          }
          onClick={()=> setActivNavIndex(index)}
            
            >
            <item.icon/>
            <span className={isExpanded ? 'block' : 'hidden'}>{item.name}</span>
            </div>)}

        </div>
    </motion.div>
  )
}

export default NavigationBar