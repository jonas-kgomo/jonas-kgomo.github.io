import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import DigitalGarden from '@/components/Garden'
import WorkHistory from '@/components/Garden'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
   
      <div className="divide-y divide-gray-200 dark:divide-gray-70">
        <div className=" pb-8 pt-6 md:space-y-5">
          <code className="text-sm clear-both text-primary-500 dark:text-primary-400">
            About 
          </code>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-teal-900 dark:text-teal-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Jonas Kgomo
          </h1>
          <div className="flex    ">
<div>
<p className="text-lg  max-w-lg bg-teal-900 p-4  font-medium leading-light text-teal-100 dark:bg-teal-900 dark:text-teal-100">
            {siteMetadata.description}
          </p>
</div>
            <div className=" ml-4 bg-teal-700 w-1/3  font-medium leading-light text-teal-100 dark:text-gray-400">

         
              <div className="text-sm h-8 p-2 bg-teal-300 font-semibold leading-light text-teal-800 dark:text-primary-800">
              Photography
              </div>
              <img src="./static/images/dalle/DALLE-3.png" alt="Jonas Kgomo" className="h-48 w-48 justify-between m-2 mx-auto"/>
 
           
    </div>
          </div>

      
        </div>
 

<div className='flex flex-wrap'>

    <div className="w-2/3  dark:divide-gray-700">
         
            <div className="p-4 text-primary-900 dark:text-primary-100">
          <p className="text-xl font-medium  ">Essays</p>
          <p>Opinionated, longform narrative writing with an agenda</p>
        </div>
 
      
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <div key={slug} className="bg-primary-100  dark:bg-primary-900 p-2 m-4">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-1">
                        <div>
                          <h2 className=" font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-900 text-lg dark:text-primary-100"
                            >
                              {title}
                            </Link>
                          </h2>
                         
                        </div>
                        {/* <div className="prose text-base max-w-none text-primary-900 dark:text-primary-100">
                          {summary}
                        </div> */}
                      </div>
                      <div className="text-sm flex   justify-between">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-800 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                        Read ⤵ <span className="inline-block mx-2 px-1 bg-primary-100 border-l-2 border-primary-300">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                     
                          </span>
                        </Link>

                        <div className="flex -my-1 text-primary-800  border-l-2 border-primary-300  text-sm flex-wrap">
                            {tags.map((tag) => (
                              <div     className="bg-primary-100  px-1 py-1  text-sm    text-primary-600 dark:text-primary-600 dark:text-primary-800"
                        >
                            
                              <Link
      href={`/tags/${tag}`}
      className="mr-3 text-sm font-medium   hover:text-primary-600 dark:hover:text-primary-400"
    >
      {tag.split(' ').join('-')}
    </Link>
                              </div>
                            ))}
                          </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>

        <div className="w-1/3  dark:divide-gray-700">
        <div className="p-4 text-primary-900 dark:text-primary-100">
          <p className="text-xl font-medium  ">Notes</p>
          <p>Loose, unopinionated notes on seeding ideas .</p>
        </div>
        
          <div className="border-r-2 border-primary-600   font-semibold leading-light text-teal-800 dark:text-primary-100">
            {/* a list of items */}
            <div className="flex flex-wrap">
              {['On Digital Auto-Synesthesia', 'Vertical Network States', 'Plural AI Governance'].map((post) => {
                return (
                  <div className="my-1 flex w-full overflow-hidden px-2 ">
                     <span   className=" bg-gradient-to-br from-primary-300 to-primary-600 mr-1  inline-block w-4 h-4 bg-primary-100  ">
                         </span>
                      {post}
                 
                  </div>
                )
              })}
            </div>

            {posts.length > MAX_DISPLAY && (
        <div className="flex py-6  ml-4 justify-start text-base font-medium leading-6">
          <Link
            href="/blog"
          className=" ring-2 ring-primary-600 dark:ring-primary-200  text-primary-100  inline-block  bg-primary-900 px-2  "
               
            aria-label="All posts"
          >
            All Posts ⤴
          </Link>
        </div>
      )}
          </div>
        </div>
</div>
    
      </div>


<div >  <div className="p-4 text-primary-900 dark:text-primary-100">
          <p className="text-xl font-medium  ">Work History</p>
          <p>I have worked in a variety of fields, including computer science, mathematics, and physics. I have also been involved in research in the areas of machine learning, computer vision, and computer graphics. </p>
        </div><WorkHistory/></div>

     
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
