import React from 'react'

function ProjectItem({image, name, role}) {
  return (
    <div className='projectItem'>
        <div style ={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> {role} </p>
      
    </div>
  )
}

export default ProjectItem
