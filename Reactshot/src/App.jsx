import React from 'react'
import Card from './component/card'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App