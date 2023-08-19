import React from "react";
import { useState } from "react";
import Web3 from "web3";
import data from '../Components/Utils/Abiandaddress.js';
function Modal(props) {
  const { setShowModal } = props;
  const { setIsMetamask } = props;
  const { setAccount } = props;
  const { setWeb3 } = props;
  const { setContract } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [istrue, setIstrue] = useState(false);
  function handleAccountsChanged(accounts) {
    setAccount(accounts[0]);
  }

  window.ethereum.on('accountsChanged', handleAccountsChanged);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") setShowModal(false);
  };

  const handleMetamask = async () => {
    if (typeof window.ethereum !== undefined) {
      console.log("Clicked");
      setIsLoading(true);
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const contract = new web3.eth.Contract(data.abi, data.address);
      setContract(contract);
      if (web3) { setIsMetamask(true) };
      setIstrue(true);
      setAccount(account[0]);
      setIsLoading(false);
    }
  };


  return (
    <div
      className="closingwindow fixed md:left-0 md:right-0  md:min-h-screen md:top-0  left-0 right-0 top-0 bg-white bg-opacity-25
       backdrop-blur-sm  z-10 overflow-y-hidden"
      onClick={handleClose}
    >
      <div className=" md:min-w-screen md:min-h-screen h-screen w-screen flex justify-center items-center" id="wrapper">
        <div className=" bg-[#030612] p-2 rounded-md font-mono h-fit  m-2">
          <ul className="unordered-list flex  justify-center m-2">
            <li className="p-2 m-2">
              <button
                className="btn rounded bg-gray-200 text-black px-2 hover:bg-gray-300 focus:shadow-lg"
                onClick={handleMetamask}
              >
                Metamask
              </button>
            </li>
            <li className="p-2 m-2">
              <button className="btn rounded bg-gray-200 text-black px-2 hover:bg-gray-300 focus: shadow-lg">
                Any Other
              </button>
            </li>
          </ul>
          {isLoading &&
            <div className="spinnerContainer flex justify-center">

              <div
                className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid 
                border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 
                !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...{" "}
                </span>
              </div>
            </div>
          }
          {
            ((!isLoading && istrue) && <h1 className="text-center text-white">Connected to Metamask Successfully</h1>)
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
