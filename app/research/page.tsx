import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  // const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
 
  const sortedTags = [{"Artificial Intelligence": "The study of making machines or software mimic human behavior."}, 
  {"Machine Learning": "A subset of AI that allows computers to learn from data."}, {"Deep Learning": "A machine learning technique that teaches computers to do what comes naturally to humans."},
  { "Natural Language Processing": "A field of AI that focuses on the interaction between computers and humans."},
  { "Data Science": "A field that uses scientific methods to extract insights from data."} 
  ]
 
  return (
    <>
      <div className=" items-start font-medium text-primary-800 justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight border-primary-800 text-primary-900 dark:text-primary-100 sm:text-4xl sm:leading-10 md:border-r-4 md:px-6 md:text-6xl md:leading-14">
            Research
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
  
       {sortedTags.map((title: any) => {
            return (
              <div key={title} className="mb-2 mr-5 mt-2">
                {/* <Tag text={t} /> */}
               
                

                <div
                  className="-ml-2 min-w-56 w-fit bg-primary-800 px-2 p-1 text-sm font-semibold uppercase text-primary-100 dark:text-primary-100 "
              
                > 
                
                {Object.keys(
                  title
                ) } 
                 
                </div>
                {Object.values(
                  title
                ) }
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

 