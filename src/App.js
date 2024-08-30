import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setcolor] = useState ("blue") ;
  
  return (
    
   
    <div className='w-full h-screen text-red-500 'style={{background:color}} >
      
      <div className=' fixed w-full h-10  bottom-0 bg-white flex justify-center items-center  space-x-5' >
        <button className='bg-green-600 rounded text-white ' onClick={()=>setcolor("green")} style={{width:"50px"}}>Green</button>
        <button className='bg-yellow-400 rounded text-white' onClick={()=>setcolor("yellow")} style={{width:"50px"}}>Yellow</button>
        <button className='bg-purple-500 rounded text-white' onClick={()=>setcolor("purple")} style={{width:"50px"}}>Purple</button>
        <button className='bg-red-600 rounded text-white' onClick={()=>setcolor("red")} style={{width:"50px"}}>Red</button>
        <button className='bg-slate-300 rounded text-black' onClick={()=>setcolor("White")} style={{width:"50px"}}>White</button>
        <button className='bg-teal-500 rounded text-white' onClick={()=>setcolor("teal")} style={{width:"50px"}}>Teal</button>
        <button className='bg-black rounded text-white' onClick={()=>setcolor("black")} style={{width:"50px"}}>Black</button>
        <button className='bg-pink-500 rounded text-white' onClick={()=>setcolor("pink")} style={{width:"50px"}}>Pink</button>
        <button className=' rounded text-white' onClick={()=>setcolor("Aqua")} style={{width:"50px",backgroundColor:"Aqua"}}>Aqua</button>
        <button className=' rounded text-white' onClick={()=>setcolor("Gold")} style={{width:"50px",backgroundColor:"#FFD700"}}>Gold</button>
        <button className=' rounded text-white' onClick={()=>setcolor("Magenta")} style={{width:"50px",backgroundColor:"	#FF00FF"}}>Black</button>
        <button className=' rounded text-white' onClick={()=>setcolor("Lime")} style={{width:"50px",backgroundColor:"Lime"}}>Lime</button>
        <button className=' rounded text-white' onClick={()=>setcolor("SkyBlue")} style={{width:"70px",backgroundColor:"SkyBlue"}}>SkyBlue</button>
        <button className=' rounded text-white' onClick={()=>setcolor("BlueViolet")} style={{width:"83px",backgroundColor:"BlueViolet"}}>BlueViolet</button>
      </div>
    </div>

  );
};

export default App;
