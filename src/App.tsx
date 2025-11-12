//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from "@/components/ui/button" //si possono importare un sacco di altre cose con npx shadcn@latest add <component>


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Work in progress</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Tailwind button test</Button>
      </div>
    </>
  )
}

export default App
