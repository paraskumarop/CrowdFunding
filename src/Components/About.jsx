import React from 'react'
import pic from '../assets/paras1.jpg'
function About() {
  return (
    <>

    <div className='text-center text-lg m-3 whitespace-pre-wrap'>
      <h1 className='font-bold text-xl leading-tight'>
        This is an Initial Coin Offering Project ....
      </h1>
      <div className='text-center m-1'>
        <section className='section1 text-justify  p-2 m-2
        h-full w-full bg-gray-400 rounded-md bg-clip-padding 
        backdrop-filter backdrop-blur-sm bg-opacity-10 border
        border-gray-100
        
        '>
          In this project I have created a YUG Token(ERC20) and I am Offering this Token to the users because there is no supply of YUG tokens currently in the market and the users who are interested to invest in our project can
          buy these tokens, The minimum amount is 0.001 ETH and the number of tokens they will get is <i> 1000000000000000 </i> <b>YUG</b>.

        </section>
        <section className='section1 text-justify  p-2 m-2
        h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter 
        backdrop-blur-sm bg-opacity-10 border border-gray-100
        
        '>
          As this is a Test Project so it is not deployed on Mainnet
          probably it will be on sepolia test Network. So it means a user don't
          have to send real value ether to test this project.
        </section>
        <section className='text-justify '>

        </section>

      </div>
      <div className="mysection mt-4">
        <h1 className='md:text-2xl text-lg font-bold'> Who Am I</h1>
        <section className='
        text-justify  p-2 m-2
        h-full w-full bg-white rounded-md bg-clip-padding backdrop-filter 
        backdrop-blur-sm bg-opacity-10 border border-gray-100
        md:flex  md:justify-center'>
          <div className=' flex justify-center md:flex  md:justify-normal md:items-center  md:h-32 md:w-32 w-full md:m-4 '>
            <img src={pic} alt="photo" loading='lazy' className=' rounded-full  md:w-32 md:h-32 h-32 w-32 border-2 border-pink-200s object-cover' />
          </div>
          <div className="writings md:m-4 m-2">
            🖐 Hello Users! <br />
            📛 My Name is Paras. <br />
            📚 I am in 4th Year of my Degree in Computer Science from <b>MIMIT</b> . <br />
            👨‍💻 I am currently building Dapps with the help of <b className='text-red-400'>React</b>  <b className='text-yellow-500'>Solidity</b>  and <b className='text-green-400'>Web3.js</b> . <br />
            ↗  See my  <a href="https://github.com/paraskumarop" target='_blank' className='underline text-blue-500 cursor-pointer hover:text-blue-700'>Github</a>  Portfolio.
          </div>
        </section>
      </div>
    </div>
</>
  )
}

export default About