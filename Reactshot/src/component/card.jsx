import React from 'react'

const one = (props) => {
  return (
    <div className='cards-container'>
      <div className='dholu'>
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, officia?</p>
      </div>
      <div className='bholu'>
        <h1>i guess its working</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur ipsam error esse minima veritatis quis officiis doloribus officia fugiat.</p>
        <button>Enter to visit nothing</button>
      </div>
    </div>
  )
}

export default one