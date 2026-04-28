import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, BookOpen } from 'lucide-react';
import { SEO, GlassCard, ScrollReveal } from '../components';
import { blogPosts } from '../data/site';

const categories = ['All', 'Engineering', 'Design', 'Culture', 'Product'];

export default function Blog() {
  return (
    <>
      <SEO title="Blog" description="Stories, insights, and ideas on tech, design, product updates, and culture from ShoverHub." />

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">Blog</p>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight max-w-3xl">
              Stories, insights &
              <br />
              <span className="text-gradient">ideas</span>
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary max-w-2xl leading-relaxed">
              Thoughts on engineering, design, product development, and the culture of building
              things that matter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="section-container">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    i === 0
                      ? 'bg-accent text-white'
                      : 'glass text-txt-secondary hover:text-txt hover:bg-surface-hover'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12">
        <div className="section-container">
          <ScrollReveal>
            <GlassCard padding="lg" className="group">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-caption bg-accent-muted text-accent font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-caption text-txt-tertiary">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-heading-lg font-bold tracking-tight group-hover:text-accent transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="mt-3 text-body text-txt-secondary leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <time className="text-body-sm text-txt-tertiary" dateTime={blogPosts[0].date}>
                      {new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                    <Link to="/blog" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                      Read article <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/3 flex items-center justify-center">
                  <div className="w-full aspect-[4/3] rounded-2xl bg-bg-tertiary flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-txt-tertiary/30" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <GlassCard padding="md" className="group h-full flex flex-col">
                  <div className="w-full aspect-[16/9] rounded-xl bg-bg-tertiary flex items-center justify-center mb-5">
                    <BookOpen className="w-8 h-8 text-txt-tertiary/30" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-caption bg-accent-muted text-accent font-medium">
                      {post.category}
                    </span>
                    <span className="text-caption text-txt-tertiary">{post.readTime}</span>
                  </div>
                  <h3 className="text-heading-sm font-semibold mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-body-sm text-txt-secondary leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <time className="text-caption text-txt-tertiary" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </time>
                    <Link to="/blog" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                      Read <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* External Blog Link */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
                  Read more on our blog
                </h2>
                <p className="mt-4 text-body-lg text-txt-secondary max-w-lg mx-auto">
                  Visit our dedicated blog for the latest articles, tutorials, and studio updates.
                </p>
                <a
                  href="https://blog.shoverhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2 mt-8 inline-flex"
                >
                  Visit Blog <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
