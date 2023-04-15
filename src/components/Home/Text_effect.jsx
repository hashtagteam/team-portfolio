import React from 'react'
import Typical from 'react-typical'

const Text_effect = () => {
  return (
    <div className=' m-16'>
      <h2 className='text-2xl uppercase mb-4'>Why should you create website!!</h2>
      <p>
        <Typical
        
        loop={Infinity}
        wrapper="b"
        steps={[
          "1. Establish an online presence ",1000,
          "2. Improve credibility and trust",1000,
          "3. Reach a wider audience",1000,
          "4. Provide information and support",1000
        ]}
        />
      </p>
    </div>
  )
}

export default Text_effect
