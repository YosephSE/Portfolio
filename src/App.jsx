import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let year = new Date().getFullYear()

  return (
    <div className='bg-emerald-300  text-red-700 text-center text-3xl font-bold'>
      <span className='block text-5xl p-9'>
        Hello World, This is my Portfolio to be.
      </span>
      <span  className="block text-2xl italic font-light p-5 selection:bg-red-600">
        Copyright Yoseph Kedir {year}
      </span>
    </div>
    
  )
}

export default App
