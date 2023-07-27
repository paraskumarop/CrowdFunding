import React, { useState } from 'react'
import Modal from './Modal';
function Navbar() {
  const [showModal,setShowModal]=useState(false);
  const openModal =()=>{
    setShowModal(true);
  }
  return (
    <div className='Navbar m-4 font-mono text-xl'>
      <ul className='flex justify-between'>
        <div className='combined-li flex '>
        <li className='font-mono text-cyan-700'>CrowdSales</li>
        <li className='mx-3'> Participate</li>
        </div>
        <li className='mx-3'>
          <button className='bg-cyan-600 rounded-sm text-white px-2' onClick={openModal}>Connect</button>
        </li>
      </ul>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </div>

  )
}

export default Navbar