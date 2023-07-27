import React from 'react'
import { useRouteError } from 'react-router-dom'
function ErrorPage() {
    const error = useRouteError();
  return (
    <div className='text-xl text-center flex-col justify-center items-center h-96'>
        <div className=' w-full h-2/4 mt-4'>

            <h1 className='text-3xl p-2'  >Oops</h1>
            <h2 className='p-2'>
                An unexpected Error has Occured
            </h2>    
            <i> {error.statusText || error.message} </i>
        </div>
    </div>
  )
}

export default ErrorPage