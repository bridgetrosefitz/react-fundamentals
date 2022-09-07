// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className="box--small box" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
const mediumBox = <div className="box--medium box" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
const largeBox = <div className="box--large box" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

function App() {
  // return (
  //   <div>
  //     {smallBox}
  //     {mediumBox}
  //     {largeBox}
  //   </div>
  // )

  return (
    <>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'orange'}}>
      medium orange box
      </Box>
    </>
  )
}

const Box = props => {
  const {className: extraClassName, children, style: extraStyle} = props
  return(
    <div className={`box ${extraClassName}`} style={{fontStyle: 'italic', ...extraStyle}}>{children}</div>
  )
}

export default App
