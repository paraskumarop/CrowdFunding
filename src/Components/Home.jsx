import React from 'react'
import Footer from './Footer'
import MainContent from './MainContent'


function Home() {
    
    return (
        <div className='Home'>
           
                    <div className='main-app flex-col md:min-h-screen' >
                        <div className="flex-1">
                            <MainContent />
                        </div>
                        <Footer />
                    </div>
        </div>
    )
}

export default Home