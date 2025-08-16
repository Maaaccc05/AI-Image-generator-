import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { Formfiled, Loader } from '../components'
import FormFiled from '../components/FormFiled'

const handleSubmit = () => {

}

const handleChange = (e) => {

}

const handleSurpriseMe = () => {

}

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
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>Create imaginative Images by DALL-E AI</p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormFiled 
            LabelName = "Your Name"
            type = "text"
            name = "name"
            placeholder = "Mac"
            value = {form.name}
            handleChange = {handleChange}
          />

          <FormFiled 
            LabelName = "prompt"
            type = "text"
            name = "prompt"
            placeholder = "a painting of a fox in the style of Starry Night"
            value = {form.prompt}
            handleChange = {handleChange}
            isSurpriseMe  
            handleSurpriseMe = {handleSurpriseMe}
          />

           <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 flex justify-center items-center'>
        {form.photo ? (
          <img
            src={form.photo}
            alt={form.prompt}
            className='w-full h-full object-contain'
          />
        ) : (
          <img
            src={preview}
            alt='preview'
            className='w-9/12 h-9/12 object-contain opacity-40'
          />
        )}
        
        {generatingImg && (
          <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
            <Loader />
          </div>
        )}
      </div>

        </div>
      </form>
    </section>
  )
}

export default Create