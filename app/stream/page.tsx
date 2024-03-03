import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import StreamLayout from '@/layouts/StreamLayout'

export const metadata = genPageMetadata({ title: 'Stream', description: 'A stream of thoughts' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'stream') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <StreamLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </StreamLayout>
    </>
  )
}
