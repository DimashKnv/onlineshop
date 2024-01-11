import { useState } from 'react'

import './App.css'
import { Navigation } from './components/Navigation'
import { Main } from './components/Main'

function App() {
  const [count, setCount] = useState(0)
  const data = null
  return (
   <>
   <Navigation></Navigation>
   <Main></Main>
   </>
  )
}

export default App
