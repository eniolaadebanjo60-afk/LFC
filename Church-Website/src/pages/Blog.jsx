import { useState, useEffect } from 'react';
import './Blog.css';
import defaultPosts from './posts';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('lfc_posts');
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      setPosts(defaultPosts);
      localStorage.setItem('lfc_posts', JSON.stringify(defaultPosts));
    }
  }, []);

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const gridPosts = posts.filter((p) => !p.featured);

  function toggleExpand(id) {
    setExpandedId(expandedId === id ? null : id);
  }

  if (posts.length === 0) return null;

  return (
    <div className="blog-page">

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <span className="blog-label">Our Blog</span>
          <h1>Words of Faith &amp;<br />Encouragement</h1>
          <p>Devotionals, stories, and insights from Living Faith Church Orimerunmu.</p>
        </div>
      </section>

      {featuredPost && (
        <section className="blog-featured">
          <div className="featured-inner">
            <div className="featured-image">
              {featuredPost.image ? (
                <img src={featuredPost.image} alt={featuredPost.title} />
              ) : (
                <div className="featured-image-placeholder">
                  <span>Featured Post</span>
                </div>
              )}
              <div className="featured-category">{featuredPost.category}</div>
            </div>
            <div className="featured-content">
              <span className="blog-label">Featured</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="post-meta">
                <span>{featuredPost.author}</span>
                <span className="meta-dot">·</span>
                <span>{featuredPost.date}</span>
              </div>

              <button
                className="blog-btn"
                onClick={() => toggleExpand(featuredPost.id)}
              >
                {expandedId === featuredPost.id ? 'Close ↑' : 'Read Article ↓'}
              </button>

              {expandedId === featuredPost.id && (
                <div className="post-body">
                  {featuredPost.body.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="blog-grid-section">
        <div className="blog-grid-header">
          <span className="blog-label">Latest Posts</span>
          <h2>More from the Blog</h2>
        </div>
        <div className="blog-grid">
          {gridPosts.map((post, i) => (
            <div
              className="blog-card"
              key={post.id}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="card-image">
                {post.image ? (
                  <img src={post.image} alt={post.title} />
                ) : (
                  <div className="card-image-placeholder"></div>
                )}
                <span className="card-category-badge">{post.category}</span>
              </div>
              <div className="card-content">
                <span className="card-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-meta">
                  <span>{post.author}</span>
                  <span className="meta-dot">·</span>
                  <span>{post.date}</span>
                </div>

                <button
                  className="card-read-btn"
                  onClick={() => toggleExpand(post.id)}
                >
                  {expandedId === post.id ? 'Close ↑' : 'Read More →'}
                </button>

                {expandedId === post.id && (
                  <div className="post-body">
                    {post.body.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="blog-cta">
        <h2>Never Miss a Post</h2>
        <p>Subscribe to our newsletter and get fresh content delivered to your inbox.</p>
        <a href="/newsletter">
          <button className="blog-btn-white">Subscribe Now</button>
        </a>
      </section>

    </div>
  );
}

export default Blog;