import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const Loading = () => {
  return (
    <div className='w-full min-h-screen h-full flex items-center justify-center'>
      <div className='animate-spin'>
        <CgSpinner fontSize={40} color='#F092DD' />
      </div>
    </div>
  )
}

export default Loading