import React from 'react';
import { ProjectList } from '../helpers/ProjectList.js';
import ProjectItem from '../components/ProjectItem';
import '../styles/Portfolio.css'

function portfolio() {
  return (
    <div className='project'>
      <h1 className='projectTitle'> Internship </h1>
      <div className='projectList'>
          {ProjectList.map((projectItem, key) => {
              return (
              <ProjectItem 
              key={key}
                image={projectItem.image} 
                name={projectItem.name} 
                role={projectItem.role} 
                />
              );
          })}
      </div>
    </div>
  )
}

export default portfolio
