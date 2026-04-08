import { useState, useEffect } from 'react';
import './BlogAdmin.css';
 
const ADMIN_PASSWORD = 'lfcadmin2025';
 
function BlogAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
 
  const [form, setForm] = useState({
    title: '',
    category: 'Faith',
    excerpt: '',
    body: '',
    author: 'Pastor Emmanuel',
    date: new Date().toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    }),
    featured: false,
  });
 
  useEffect(() => {
    const saved = localStorage.getItem('lfc_posts');
    if (saved) setPosts(JSON.parse(saved));
  }, []);
 
  function handleLogin() {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }
 
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }
 
  function handleSubmit() {
    if (!form.title || !form.excerpt || !form.body) {
      alert('Please fill in all required fields.');
      return;
    }
 
    const newPost = {
      ...form,
      id: Date.now(),
    };
 
    let updatedPosts = [...posts];
 
    if (form.featured) {
      updatedPosts = updatedPosts.map((p) => ({ ...p, featured: false }));
    }
 
    updatedPosts = [newPost, ...updatedPosts];
    setPosts(updatedPosts);
    localStorage.setItem('lfc_posts', JSON.stringify(updatedPosts));
 
    setForm({
      title: '',
      category: 'Faith',
      excerpt: '',
      body: '',
      author: 'Pastor Emmanuel',
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
      }),
      featured: false,
    });
 
    setSuccessMsg('Post published successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
  }
 
  function handleDelete(id) {
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    localStorage.setItem('lfc_posts', JSON.stringify(updated));
  }
 
  if (!authenticated) {
    return (
      <div className="admin-login">
        <div className="login-box">
          <div className="login-logo">LFC</div>
          <h2>Admin Access</h2>
          <p>Enter the admin password to continue.</p>
          <input
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className={passwordError ? 'input-error' : ''}
          />
          {passwordError && <span className="error-msg">Incorrect password. Try again.</span>}
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }
 
  return (
    <div className="admin-page">
 
      <div className="admin-header">
        <div>
          <span className="admin-label">Living Faith Church</span>
          <h1>Blog Admin</h1>
        </div>
        <button className="admin-logout" onClick={() => setAuthenticated(false)}>
          Logout
        </button>
      </div>
 
      <div className="admin-section">
        <h2>Add New Post</h2>
        <div className="admin-form">
 
          <div className="form-row">
            <div className="form-group">
              <label>Post Title *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter post title"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={form.category} onChange={handleChange}>
                <option>Faith</option>
                <option>Prayer</option>
                <option>Community</option>
                <option>Purpose</option>
                <option>Worship</option>
                <option>Announcement</option>
              </select>
            </div>
          </div>
 
          <div className="form-row">
            <div className="form-group">
              <label>Author</label>
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Author name"
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="e.g. April 1, 2025"
              />
            </div>
          </div>
 
          <div className="form-group">
            <label>Short Excerpt * <span>(shown on the blog card)</span></label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              placeholder="Write a short summary of the post..."
              rows={3}
            />
          </div>
 
          <div className="form-group">
            <label>Full Post Body * <span>(separate paragraphs with a blank line)</span></label>
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              placeholder="Write the full article here..."
              rows={10}
            />
          </div>
 
          <div className="form-check">
            <input
              type="checkbox"
              name="featured"
              id="featured"
              checked={form.featured}
              onChange={handleChange}
            />
            <label htmlFor="featured">Set as Featured Post</label>
          </div>
 
          {successMsg && <div className="success-msg">{successMsg}</div>}
 
          <button className="admin-submit" onClick={handleSubmit}>
            Publish Post
          </button>
        </div>
      </div>
 
      <div className="admin-section">
        <h2>All Posts ({posts.length})</h2>
        <div className="admin-posts-list">
          {posts.map((post) => (
            <div className="admin-post-item" key={post.id}>
              <div className="admin-post-info">
                {post.featured && <span className="featured-badge">Featured</span>}
                <h3>{post.title}</h3>
                <p>{post.author} · {post.date} · {post.category}</p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
 
    </div>
  );
}
 
export default BlogAdmin
 