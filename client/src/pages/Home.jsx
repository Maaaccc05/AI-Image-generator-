import React, {useState, useEffect} from 'react'

import { Card, Formfiled, Loader } from '../components'

const Home = () => {

  const [loading, setLoading] = useState(false)
  const[allPosts, setAllpost] = useState(null)
  return (
    <section className='max-w-7xl '>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community</h1>
      <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Browse through imaginative creation by DALL-E AI</p>
      </div>
      <div className='mt-16'>
        <Formfiled />
      </div>

    </section>
  )
}

export default Home