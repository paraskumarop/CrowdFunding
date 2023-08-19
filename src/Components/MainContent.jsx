import React, { useState, useRef, useEffect, useContext } from "react";
import "../App.css";
import Lottie from "lottie-react";
import animation from "../assets/growth-analysis.json";
import { ContractContext } from "./NavbarWrapper";
import { Web3Context } from "./NavbarWrapper";
import { Link } from "react-scroll";
import CountDownTimer from "./Utils/CountDownTimer";

function MainContent() {
  const Contract = useContext(ContractContext);
  const web3 = useContext(Web3Context);
  const myref = useRef();
  const [myelementIsvisible, setMyelementIsvisible] = useState(false);
  const [isInputEnabled, setIsInputEnabled] = useState(false)
  const [amount, setAmount] = useState();
  const [accounts, setAccounts] = useState();
  const defaultRemainingState =
  {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
  };
  const [remainingTime, setRemainingTime] = useState(defaultRemainingState);
  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      const entry = enteries[0];
      setMyelementIsvisible(entry.isIntersecting);
    });
    observer.observe(myref.current);

  }, []);

  useEffect(() => {
    (async () => {
      if (web3) {

        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts[0]);
      }
    })();
  }, [web3])

  useEffect(() => {
    (async () => {
      if (Contract) {
        const getEndingTime = await Contract.methods.endingTime().call();
        const EndingTimeinstring = getEndingTime.toString() * 1000;
        const interval = setInterval(() => {
          updateRemainingTime(EndingTimeinstring)
        }, 1000);
        () => { clearInterval(interval) }
      }
    })();
  }, [])

  function updateRemainingTime(EndingTimestamp) {
    setRemainingTime(CountDownTimer(EndingTimestamp));
  }


  const handleInput = (e) => {
    setAmount(e.target.value);
    if (e.target.value < 0.001) {
      setIsInputEnabled(true);
    }
    else {
      setIsInputEnabled(false);
    }
  }

  const handleDeposit = async (e) => {
    e.preventDefault();
    try {
      const Amount = web3.utils.toWei(amount, "ether");
      const receipt = await Contract.methods.deposit().send({ from: accounts, value: Amount });
      console.log('this' + receipt);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mainContent ">
      <main className="main-content">
        <div className="firstpage flex justify-center items-center md:h-screen ">
          <div className=" text-center flex justify-center">
            <div className="animationBox   flex justify-start  ">
              <Lottie className="h-80 md:h-96" animationData={animation}  />
            </div>
            <div className="card self-center ml-1 m-2">
              <h1
                className="typinganimation md:text-4xl 
                 md:border-r-2 font-mono md:whitespace-nowrap 
                mx-auto md:tracking-wide sm:text-sm sm:text-center md:p-2
                "
              >
                <u className="text-pink-500 hover:text-pink-700 hover:cursor-pointer">
                  <Link
                    activeClass="active"
                    to="getInputfromuser"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500} >
                    ParticiPate
                  </Link>
                </u>{" "}<>in <b><i>Yug</i></b> Initial Coin offering  </> </h1>
            </div>
          </div>
        </div>

        <div className="writings text-left bg-gradient-to-r from-emerald-500 via-violet-700 to-amber-400 md:p-5 rounded-sm bg-opacity-90  md:mt-20 ">
          <p className="texting text-center text-base text-white p-2">
            Participate in our ICO and get rewarded with <i>YUG</i> tokens
          </p>
        </div>

        <div className=" text-center  md:min-h-screen h-72 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 bg-contain ">
          <div className=" flex justify-center items-center md:h-screen  h-72  p-5 md:p-0 ">
            <table
              className={`meraTable  table-auto w-1/2 font-mono  bg-slate-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 outline outline-gray-100  rounded-lg text-lg text-white invisible
              ${myelementIsvisible ? "slide" : ""} `}
              ref={myref}
            >
              <thead>
                <tr className="m-2">
                  <th className="border-r-2 md:py-5 p-2">Security</th>
                  <th className=" md:py-5 py-2 p-2">Profit</th>
                  <th className=" md:py-5 border-l-2 p-2 ">Earning</th>
                </tr>
              </thead>
              <thead>
                <tr className="m-2 ">
                  <th className="border-t-2  border-r-2 md:py-5 p-2 ">
                    Reliability
                  </th>
                  <th className="border-t-2 border-r-2 md:py-5 p-2">Economics</th>
                  <th className="border-t-2 md:py-5 p-2">Web3</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        {/* mainPageINPut */}
        <div className="getInputfromuser md:min-h-screen ">

          {(Contract) &&
            (!(remainingTime.days == 0 && remainingTime.hours == 0 && remainingTime.minutes == 0 && remainingTime.seconds == 0) 
            ?
              <div className="md:text-center md:text-2xl text-lg text-center font-medium">
                Sale Ends in <br />
                <div className=" inline font-sans">
                  <span className='ml-2'>{remainingTime.days}</span>
                  <span className='ml-2'>Days</span>
                  <span className='ml-2'>{remainingTime.hours}</span>
                  <span className='ml-2'>Hours</span>
                  <span className='ml-2'>{remainingTime.minutes}</span>
                  <span className='ml-2'>Minutes</span>
                  <span className="ml-2">{remainingTime.seconds}</span>
                  <span className='ml-2'>Seconds</span>
                </div>
              </div> 
            :
              <div className="writings text-left bg-gradient-to-r from-red-500 via-pink-700 to-blue-400 md:p-5 rounded-sm bg-opacity-90  md:mt-0 ">
                <p className="texting text-center text-lg font-bold text-white">
                  ICO is OVER
                </p>
              </div>
              )}
          <div className="flex justify-center items-center md:min-h-screen h-72 ">
            <div className="form md:m-2">
              <form
                disabled={remainingTime ? false : true}
                action=""
                className="flex flex-col bg-pink-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-200 sm:p-6 p-2 shadow-sm h-fit"
              >
                <div className="first m-2 align-baseline">
                  <label className="w-1/2 amount sm:m-5 m-2 font-semibold font-mono sm:text-lg text-base align-sub">
                    Amount
                  </label>
                  <input
                    className="w-1/2 inputamount   border-b-2 border-gray-200  bg-inherit focus:border-gray-950 text-sm font-mono"
                    type="text"
                    placeholder="0.001 ETH"
                    onChange={handleInput}
                  />
                </div>
                <h1 className={`text-center  font-mono  text-sm ${isInputEnabled ? "" : "hidden"}`}>
                  <u> Minimum amount:0.001 <i>ETH</i> </u>
                </h1>
                <div className="flex justify-center mt-3">
                  <button className="third text-center bg-gradient-to-r from-pink-600 to-amber-500  rounded-full text-white font-mono font-semibold px-6 py-1 hover:bg-slate-800 shadow-lg hover:translate-y-1 hover:bg-gradient-to-r hover:from-pink-700 hover:to-amber-700 hover:transition-transform 
                  disabled:pointer-events-none
                  "
                    onClick={handleDeposit}
                    title='deposit'

                    disabled={(remainingTime.days == 0 && remainingTime.hours == 0 && remainingTime.minutes == 0 && remainingTime.seconds == 0) ? true : false}
                  >
                    Deposit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainContent;
