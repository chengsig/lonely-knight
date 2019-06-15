import React from 'react'

export default function Square({ black, children }) {
    console.log('rendering square')
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  //const style = { backgroundColor: fill, color: stroke, width: '100%', height: '100%'}

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      
      {children}
    </div>
  )
}
