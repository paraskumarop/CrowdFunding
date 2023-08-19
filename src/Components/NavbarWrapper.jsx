import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export const ContractContext = createContext();
export const Web3Context = createContext();
function NavbarWrapper() {
    const [contractMain, setContractMain] = useState();
    const [web3Main, setWeb3Main] = useState();
    return (
        <div>
            <ContractContext.Provider value={contractMain}>
                <Web3Context.Provider value={web3Main}>
                    <div className='nav'>
                        <Navbar setContractMain={setContractMain} setWeb3Main={setWeb3Main} />
                    </div>
                    <div className="detail">
                        <Outlet />
                    </div>
                </Web3Context.Provider>
            </ContractContext.Provider>
        </div>
    )
}

export default NavbarWrapper