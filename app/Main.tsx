import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

import WorkHistory from '@/components/Garden'
import Projects from './projects/page'
import Portfolio from '@/components/Portfolio'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <div className="dark:divide-gray-70 divide-y divide-gray-200">
        <div className=" pb-8 pt-6 md:space-y-5">
          <code className="clear-both text-sm text-primary-500 dark:text-primary-400">About</code>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-teal-900 dark:text-teal-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Jonas Kgomo
          </h1>
          <div className="flex    ">
            <div>
              <p className="leading-light  max-w-lg bg-teal-900 p-4  text-lg font-medium text-teal-100 dark:bg-teal-900 dark:text-teal-100">
                Jonas Kgomo is a research engineer and founder of Equiano Institute. He studied
                mathematics at Istanbul University and Computer Science at Sussex University. He is
                also a researching{' '}
                <a href="https://wtgowers.github.io/human-style-atp/" className="px-1 font-bold">
                  human style theorem provers ⤴
                </a>
                at Cambridge University under Sir. Timothy Gowers and AI alignment, ethics and
                economics at
                <a href="https:equiano.institute" className="px-1 font-bold">
                  Equiano Institute ⤴
                </a>
                . Recently, hacking on a collaborative software. Previously at
                <a href="https:joinef.com" className="px-1 font-bold">
                  Enterpreneur First ⤴
                </a>
              </p>
            </div>
            <div className=" leading-light ml-4 w-1/3  bg-teal-700 font-medium text-teal-100 dark:text-gray-400">
              <div className="leading-light h-8 bg-teal-300 p-2 text-sm font-semibold text-teal-800 dark:text-primary-800">
                Photography
              </div>
              <img
                src="./static/images/dalle/DALLE-3.png"
                alt="Jonas Kgomo"
                className="m-2 mx-auto h-48 w-48 justify-between"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-2/3">
            <div className="p-4 text-primary-900 dark:text-primary-100">
              <p className="text-xl font-medium  ">Essays</p>
              <p>Opinionated, longform narrative writing with an agenda</p>
            </div>

            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <div key={slug} className="m-4  bg-primary-200 p-3 dark:bg-primary-900">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-1">
                          <div>
                            <h2 className=" font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-lg text-primary-900 dark:text-primary-100"
                              >
                                {title}
                              </Link>
                            </h2>
                          </div>
                          {/* <div className="prose text-base max-w-none text-primary-900 dark:text-primary-100">
                          {summary}
                        </div> */}
                        </div>
                        <div className="flex justify-between   text-sm">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-800 hover:text-primary-600 dark:text-primary-600 dark:hover:text-primary-300"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read ⤵{' '}
                            <span className="mx-2 inline-block border-l-2 border-primary-300 bg-primary-100 px-1">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </span>
                          </Link>

                          <div className="-my-1 flex flex-wrap  border-l-2 border-primary-300  text-sm text-primary-800">
                            {tags.map((tag) => (
                              <div className="bg-primary-100  px-1 py-1  text-sm    text-primary-600 dark:text-primary-600 dark:text-primary-800">
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
              <p>Loose, unopinionated notes on seeding ideas</p>
            </div>

            <div className="leading-light font-semibold text-teal-800 dark:text-primary-100">
              {/* a list of items */}
              <div className="flex flex-wrap">
                {[
                  'On Digital Auto-Synesthesia',
                  'Vertical Network States',
                  'Plural AI Governance',
                ].map((post) => {
                  return (
                    <div className="my-1 flex w-full overflow-hidden px-2 ">
                      <span className=" mr-1 inline-block h-4 w-4  bg-primary-100 bg-gradient-to-br from-primary-300 to-primary-600  "></span>
                      {post}
                    </div>
                  )
                })}
              </div>

              {posts.length > MAX_DISPLAY && (
                <div className="ml-4 flex  justify-start py-6 text-base font-medium leading-6">
                  <Link
                    href="/blog"
                    className=" inline-block bg-primary-900 px-2  text-primary-100  ring-2  ring-primary-600 dark:ring-primary-200  "
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

      <div>
        {' '}
        <div className="p-4 text-primary-900 dark:text-primary-100">
          <p className="text-xl font-medium  ">Work History</p>
          <p>
            I have worked in a variety of fields, including computer science, mathematics, and
            physics. I have also been involved in research in the areas of machine learning,
            computer vision, and computer graphics.{' '}
          </p>
        </div>
        <WorkHistory />
        <div className="p-4 text-primary-900 dark:text-primary-100">
          <p className="text-xl font-medium  ">Projects : Demo Scenes</p>
          <p>
            I have worked in a variety of fields, including computer science, mathematics, and
            physics. I have also been involved in research in the areas of machine learning,
            computer vision, and computer graphics.{' '}
          </p>
        </div>
        <Portfolio />
      </div>
    </>
  )
}
