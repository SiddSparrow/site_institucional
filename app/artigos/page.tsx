import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import { sanityClient } from '@/lib/sanity'
import Link from 'next/link'

const query = `
*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  excerpt,
  "slug": slug.current
}
`

export default async function ArtigosPage() {
  const posts = await sanityClient.fetch(query)

  return (
    <>
      <Navbar />

      <main
        style={{
          padding: '100px 20px',
          backgroundColor: '#fafafa',
        }}
      >
        <section
          style={{
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          <header style={{ marginBottom: 60 }}>
            <h1
              style={{
                fontSize: 42,
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Artigos
            </h1>

            <p
              style={{
                fontSize: 18,
                color: '#555',
                maxWidth: 600,
              }}
            >
              Conteúdos pensados para informar, orientar e gerar clareza.
            </p>
          </header>

          {posts.length === 0 && (
            <p>Nenhum artigo publicado até o momento.</p>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 32,
            }}
          >
            {posts.map((post: any) => (
              <article
                key={post._id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 12,
                  padding: 32,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <h2
                  style={{
                    fontSize: 26,
                    marginBottom: 12,
                  }}
                >
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p
                    style={{
                      color: '#666',
                      fontSize: 16,
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    {post.excerpt}
                  </p>
                )}

                <Link
                  href={`/artigos/${post.slug}`}
                  style={{
                    fontWeight: 500,
                    color: '#111',
                    textDecoration: 'underline',
                  }}
                >
                  Ler artigo →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
