import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { Formfiled, Loader } from '../components'

const Create = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  })

  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <section className='max-w-7xl '>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create Your thoughts Here</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Browse through imaginative creation by DALL-E AI</p>
      </div>
    </section>
  )
}

export default Create