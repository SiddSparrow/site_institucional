import { sanityClient } from '@/lib/sanity'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

const query = `
*[_type == "post" && slug.current == $slug][0] {
  title,
  excerpt,
  content
}
`

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  const post = await sanityClient.fetch(query, {
    slug,
  })

  return {
    title: post?.title || 'Artigo',
    description: post?.excerpt,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const post = await sanityClient.fetch(query, {
    slug,
  })

  if (!post) {
    return <div>Post não encontrado</div>
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
    </main>
  )
}
