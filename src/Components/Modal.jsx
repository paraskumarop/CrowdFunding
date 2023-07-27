import React, { useState } from 'react'
import Web3 from 'web3'
function Modal(props) {
  const {setShowModal} =props;
  const [ismetamask,setIsmetamask] = useState(false);
  const [address,setAddress] = usestate(0x0);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose=(e)=>{
    if(e.target.id === "wrapper")
    setShowModal(false);
  }
  const handleMetamask=async ()=>{    
    if(window.ethereum.isMetaMask()){
            setIsLoading(true);
            const web3 = new Web3(window.ethereum);
            // const account=  await window.ethereum.request({method:"eth_requestAccounts"});
            setIsLoading(false);
            setAddress(account);
            console.log(account);
    }
    
  }
  return (
    <div className='fixed left-0 right-0 min-h-screen inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center m-1 ' id='wrapper' onClick={handleClose}>
      <div className="md:w-[500px] flex flex-col ">
        <div className=' bg-white  p-2 rounded-sm font-mono'>
            <ul className='unordered-list flex  m-2 justify-center'> 
                <li className='p-2 m-2'>
                    <button className='btn rounded bg-cyan-500 text-white px-2 hover:bg-cyan-800 ' onClick={handleMetamask} >Metamask</button></li>
                <li className='p-2 m-2'>
                    <button className='btn rounded bg-cyan-500 text-white px-2 hover:bg-cyan-800 '>Trust Wallet</button></li>
                <li className='p-2 m-2'>
                    <button className='btn rounded bg-cyan-500 text-white px-2 hover:bg-cyan-800 '>Any Other</button></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal