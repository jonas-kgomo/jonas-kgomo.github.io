import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'

import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>

}

export default function StreamLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-semibold leading-light tracking-tight text-primary-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Streams 
          </h1>
          <code className='text-sm font-medium leading-light text-primary-800 dark:text-gray-400'>
          'A stream of thought, short-form things I am thinking about ... '
          </code>
          <div className="flex  ">
           
          {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={100}
                height={100}
                className="h-16 w-16 object-cover border-4 border-gray-200 border-primary-600 dark:border-primary-700 rounded-full"
              />
            )}

<code className="text-sm m-auto font-medium leading-light text-primary-600 dark:text-gray-400">
            {name}
            <br/>
            {occupation}
</code>
            </div>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
