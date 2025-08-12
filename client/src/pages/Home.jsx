import React, {useState, useEffect} from 'react'

import { Card, Formfiled, Loader } from '../components'

const Home = () => {

  const [loading, setLoading] = useState(false)
  const[allPosts, setAllpost] = useState(null)
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community</h1>
      </div>
    </section>
  )
}

export default Home