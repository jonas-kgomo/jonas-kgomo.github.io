'use client'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useState } from 'react'
import { Threads } from './social-icons/icons'

export default function Footer() {
  const [isHovered, setIsHovered] = useState(true)

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {isHovered ? (
            <div
              onMouseEnter={() => setIsHovered(!isHovered)}
              className="flex h-5 justify-between text-sm text-primary-800 dark:text-primary-300"
            >
              Socials{' '}
              <Threads className="h-5 w-5 fill-current pl-1  text-primary-800 dark:text-primary-300 " />
            </div>
          ) : (
            <>
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
              <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
            </>
          )}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Created by {siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteMetadata.title}</div>
          <Link className=" underline" href="/colophon">
            {' '}
            Cipholon
          </Link>
        </div>
      </div>
    </footer>
  )
}
