import React, { useState, useEffect } from 'react'
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
function Navbar(props) {
  const { setContractMain } = props;
  const { setWeb3Main } = props;
  const [showModal, setShowModal] = useState(false);
  const [showPopper, setShowPopper] = useState(false);
  const [isMetamask, setIsMetamask] = useState(false);
  const [contract, setContract] = useState();
  const [account, setAccount] = useState();
  const [web3, setWeb3] = useState();


  useEffect(() => {

    if (contract) {
      setContractMain(contract);
    }
  }, [contract])

  useEffect(() => {

    if (web3) {
      setWeb3Main(web3);
    }
  }, [web3])

  const openPopper = (e) => {
    setShowPopper(!showPopper);
  }
  const openModal = (e) => {
    setShowModal(true);
  }
  const handleClose = () => {
    setShowPopper(false);
  }
  const handleLogout = () => {
    setAccount('0x0');
    location.reload();
  }
  const addressSmoothner = (account) => {
    if (account)
      return account.slice(0, 4) + "...." + account.slice(-4, -1);
    else
      return null;
  }

  return (
    <div className='Navbar font-mono sm:text-xl text-sm  top-0 left-0  z-1000 bg-[#030612]  md:p-5 w-[100vw] p-2 '>
      <ul className='flex justify-between'>
        <div className='combined-li flex text-[#e8e4a1]'>
          <li className='font-mono navlinkbar'>
            <NavLink to={'/'} >CrowdSale</NavLink>
          </li>
          <li className='mx-2 md:mx-3 navlinkbar'>
            <NavLink to={'about'} >About</NavLink>
          </li>
        </div>
        <li>
          {!isMetamask ?
            <button id='showModal' className='bg-gray-800 rounded-sm text-white px-2 ' onClick={openModal}>Connect</button>
            : <button id='connect-button' className='bg-gray-600 w-10 h-5 text-[#e8e4a1] rounded-full  text-s text-center mt-0 ' onClick={openPopper} > o  </button>

          }
        </li>
      </ul>
      {showPopper &&
        <div className='popper-connect   absolute text-white md:right-0 md:top-10 rounded-sm flex justify-center md:mt-2 left-42 right-0  top-12' id='popper-connect ' >
          <div className='insider-row  bg-slate-900 flex-col py-4 justify-center w-32 mr-2 rounded-lg '>
            <div className="col1 text-center text-base font-mono bg-slate-500 rounded-lg text-white px-2 hover:bg-slate-600 m-1">
              <h1 className='text-base'>{addressSmoothner(account)}</h1>
            </div>
            <div className="col1  text-center ">
              <button className='text-base font-mono bg-slate-500 rounded-lg text-white px-2 hover:bg-slate-600 '
                onClick={handleLogout}
              >Logout</button>
            </div>
          </div>
        </div>
      }

      {showModal && <Modal setShowModal={setShowModal} setIsMetamask={setIsMetamask} setAccount={setAccount} setContract={setContract} setWeb3={setWeb3} />}
    </div>

  )
}


export default Navbar