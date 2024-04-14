import React from 'react'
import { Github } from './social-icons/icons'

const projects = [
  {
    title: 'Theorem Proving',
    description: 'Human-style old-school theorem provers',
    url: 'https://wtgowers.github.io/human-style-atp/resources',
  },
  {
    title: 'Simulacra VR',
    description:
      'Developing virtual reality music instrument app that lets you create and play music',
    url: '',
  },
  {
    title: 'Red-teaming software for LLMs',
    description: 'Security software for LLMs',
    url: 'https://github.com/equiano-institute/haystack',
  },
  {
    title: 'RLHF with OpenAI',
    description: 'Reinforcement learning framework with OpenAI',
    url: 'https://rlhf.app',
  },
]

const Portfolio = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="opacity-98 block bg-primary-800 p-0 dark:bg-primary-600 md:flex md:p-4"
        >
          <div className="w-4/5 p-2 font-medium text-primary-100 dark:text-primary-900">
            <p className="text-xl font-bold">{project.title} </p>
            <p>{project.description}</p>
          </div>
          {project.url && (
            <a href={project.url} className="text-xs text-primary-200 hover:underline">
              <div className="h-12 w-32 text-wrap bg-primary-900 p-1 font-medium text-primary-100 hover:opacity-60 md:h-full">
                {project.url.replace('https://', '').split('/')[0]} ⤴
              </div>
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

export default Portfolio
