import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { client, urlFor, POST_QUERY, formatDate, formatReadTime, type BlogPost } from '../lib/sanity';

const portableComponents = {
  types: {
    image: ({ value }: any) => (
      <img src={urlFor(value).width(1200).url()} alt={value.alt || ''} />
    ),
  },
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [others, setOthers] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    client
      .fetch<{ post: BlogPost | null; others: BlogPost[] }>(POST_QUERY, { slug })
      .then((data) => {
        setPost(data.post);
        setOthers(data.others);
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center text-muted-foreground">Loading…</div>;
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl mb-4">Post not found</h1>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/blog"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-72 lg:h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
        <ImageWithFallback
          src={post.image ? urlFor(post.image).width(1920).height(960).fit('crop').url() : ''}
          alt={post.imageAlt || post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end container mx-auto px-4 lg:px-8 pb-10 lg:pb-16">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm mb-4 w-fit">
            {post.category}
          </span>
          <h1 className="text-3xl lg:text-5xl text-white max-w-3xl leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-5 mt-4 text-white/80 text-sm">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{formatReadTime(post.readMinutes)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>
          <div className="blog-content">
            <PortableText value={post.body || []} components={portableComponents} />
          </div>
        </div>
      </section>

      {/* More Posts */}
      {others.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl mb-8">More Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((other) => (
                <Link
                  key={other._id}
                  to={`/blog/${other.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={other.image ? urlFor(other.image).width(800).height(500).fit('crop').url() : ''}
                      alt={other.imageAlt || other.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
                        {other.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-2">
                      <span>{formatDate(other.publishedAt)}</span>
                      <span>·</span>
                      <span>{formatReadTime(other.readMinutes)}</span>
                    </div>
                    <h3 className="text-base leading-snug">{other.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}