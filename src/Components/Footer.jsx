import React from 'react'

function Footer() {
    return (
            <footer className='main-footer mb-0 text-[#fcfef6] bg-[#030612] left-0
            bottom-0   border-t-2  overflow-hidden w-screen' >
                <div className="container1 flex justify-center">
                    <div className='row1 m-2 text-center'>
                        <div className="col1 m-2 ">
                            <h4 className='font-semibold'>Address</h4>
                            <ul className="unordered-list ">
                                <li>408 town street berlin</li>
                            </ul>
                        </div>
                        <div className="col1 m-2 ">
                            <h4  className='font-semibold'>Contact Us</h4>
                            <ul className="unordered-list">
                                <li>+911245712</li>
                                <li>+917890212</li>
                            </ul>
                        </div>
                        <div className='row1'>
                        <p className='columns-sm font-normal'>
                            &copy;Crowder private limited All rights reserved @2023
                        </p>
                    </div>
                    </div>
                </div>
            </footer>

    )
}

export default Footer