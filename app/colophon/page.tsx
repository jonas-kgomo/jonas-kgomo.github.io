import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import ColophonLayout from '@/layouts/ColophonLayout'

export const metadata = genPageMetadata({
  title: 'Colophon',
  description: 'How this site was made',
})

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'colophon') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <ColophonLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </ColophonLayout>
    </>
  )
}
