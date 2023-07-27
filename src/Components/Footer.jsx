import React from 'react'

function Footer() {
    return (
            <footer className='main-footer mt-2 mb-0 text-white bg-slate-900 left-0
            bottom-0 w-full relative '>
                <div className="container1 flex-col ">
                    <div className='row1 flex m-2 justify-center'>
                        <div className="col1 m-2">
                            <h4 className='font-bold'>Address</h4>
                            <ul className="unordered-list">
                                <li>408 town street</li>
                                <li>Berlin</li>
                            </ul>
                        </div>
                        <div className="col1 m-2">
                            <h4  className='font-bold'>Contact Us</h4>
                            <ul className="unordered-list">
                                <li>+911245712</li>
                                <li>+917890212</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row1 flex justify-center'>
                        <p className='columns-sm font-semibold'>
                            &copy;Crowder private limited All rights reserved @2023 
                        </p>
                    </div>
                </div>
            </footer>

    )
}

export default Footer