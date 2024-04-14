interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A PDF annotator',
    description: `An AI annotator designed for researchers to quickly access and analyze vast amounts of information, including webpages, images, videos, and more. Utilizing advanced AI features, it provides precise and efficient search capabilities for research purposes.`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/jonas-kgomo',
  },
  {
    title: 'Haystack',
    description: `Client software designed for red teaming activities, allowing security professionals to simulate real-world attacks and test the effectiveness of their organization's security measures. It provides a range of features for reconnaissance, exploitation, and post-exploitation, enabling comprehensive security assessments.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/equiano-institute/haystack',
  },
]

export default projectsData
