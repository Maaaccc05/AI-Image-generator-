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

  return (
    <div>Create</div>
  )
}

export default Create