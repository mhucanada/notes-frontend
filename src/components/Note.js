import React from 'react'

//react arrow function component
const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className='note'>
      {note.content}

      {/*button to set the importance of the note*/}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note
