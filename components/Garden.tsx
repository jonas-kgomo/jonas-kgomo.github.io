'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const jobs = [
  {
    date: '2024-06-01',
    title: 'Founder',
    company: 'Equiano Institute',
    location: 'Kenya',
    range: 'June 2024 - Present',
    url: 'https://equiano.institute/',
    description: [
      'Researching the theory of neural networks and their applications in machine learning',
      'Developing and implementing new algorithms for training and optimizing neural networks',
      'Collaborating with researchers in the field of machine learning and computer vision',
    ],
  },
  {
    date: '2023-08-01',
    title: 'Research Engineer',
    company: 'Cambridge University',
    location: 'UK',
    range: 'September 2023 - Present',
    url: 'https://www.cambridge.org/',
    description: [
      'Researching the theory of formal theorem proving systems',
      'Developing and implementing new algorithms for theorem proving',
      'Collaborating with researchers in the field of computer science and mathematics',
    ],
  },
  {
    date: '2019-06-01',
    title: 'Volunteer',
    company: 'Cohere4AI',
    location: 'Global',
    range: 'April 2019 - Present',
    url: 'http://cohere.for.ai',
    description: [
      'Organising NLP workshops',
      'Developing mentorship programme for writing code, blogs, and other resources',
      'Creating a community for people to share their knowledge and experience for the benefit of the early researchers',
    ],
  },
  {
    date: '2018-04-01',
    title: 'Tech Ambassador',
    company: 'Iris AI',
    location: 'Singularity University',
    range: 'Jan 2017- Present',
    url: 'https://iris.ai/',
    description: [
      'Training the knowledge graph of AI used to collect academic articles, to help researchers find relevant articles',
      'Ambassador for IRIS AI, R&D Science Assistant Building a precise reading list of research documents',
      'Helped solidify a brand direction for Project AIUR and search tools that spans both academia and industry',
    ],
  },
  {
    date: '2018-12-14',
    title: 'Quantum Engineer',
    company: 'Bohr Technology',
    location: 'Poland, Warsaw',
    range: 'Dec 2018 - Present',
    url: 'https://www.bohr.technology/',
    description: [
      'Researching quantum optimization algorithms (Travelling Salesman Problem)',
      'Work with Python for the Project Q (ETH Zurich) framework.',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      'Solving optimization for intractable problems',
    ],
  },
  {
    date: '2015-12-21',
    title: 'XR Technologist',
    company: 'VR First',
    location: 'Istanbul',
    range: 'Aug 2016 - Dec 2017',
    url: 'https://www.upstatement.com/',
    description: [
      'Developing VR and AR software for clients in industry level',
      'Leading other teams as resident developer at VR First Lab',
      'Presenting at conferences and seminars about immersive technologies',
    ],
  },
]

const Timeline = ({ selectedJob, selectedIndex }) => {
  const handleJobClick = (index: any) => {
    selectedJob(index)
  }

  return (
    <div className="timeline h-76 flex w-1/3 flex-col bg-primary-200 py-6 dark:bg-primary-600 ">
      {jobs.map((job, index) => (
        <motion.div
          key={index}
          className={` ${selectedIndex ? 'font-base' : 'font-medium'} timeline-entry hover:bg-gray-300" cursor-pointer   bg-primary-200   px-4 dark:bg-primary-600`}
          onClick={() => handleJobClick(index)}
          animate={{
            opacity: selectedIndex === index ? '100%' : '70%',
            borderLeft: selectedIndex === index ? '6px solid teal' : '0px solid transparent',
          }}
          transition={{ duration: 0.1 }}
        >
          <p>{job.company}</p>
        </motion.div>
      ))}
    </div>
  )
}

const Sidebar = ({ selectedJobIndex }) => {
  if (selectedJobIndex === null) return null

  const job = jobs[selectedJobIndex]
  return (
    <div className="sidebar  h-full w-2/3 bg-primary-900 p-4 font-medium text-primary-200">
      <div className="flex">
        {job.title} <p className="text-medium pl-2 text-primary-400">@ {job.company}</p>
      </div>

      {/* Add more details here */}
      <ul className="text-sm md:text-base ">
        <code> {job.range} </code>
        {job.description.map((description, index) => (
          <li key={index}>• {description}</li>
        ))}
      </ul>
    </div>
  )
}

export default function WorkHistory() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0)

  return (
    <div className="flex">
      <Timeline selectedIndex={selectedJobIndex} selectedJob={setSelectedJobIndex} />

      <Sidebar selectedJobIndex={selectedJobIndex} />
    </div>
  )
}
