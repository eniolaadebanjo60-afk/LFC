import { useState, useEffect } from 'react';
import './BlogAdmin.css';
import defaultPosts from './posts';
 
const ADMIN_PASSWORD = 'lfcadmin2026';
const defaultTestimonies = [
  { id: 1, name: "Sister Blessing Adeyemi", category: "Healing", text: "I was diagnosed with a condition the doctors said would take months to recover from. After a special prayer session at Living Faith Church Orimerunmu, I went back for my check-up and the doctors were confused. God healed me completely. To God be the glory!", date: "March 2025" },
  { id: 2, name: "Brother Femi Okafor", category: "Financial Breakthrough", text: "I had been unemployed for over a year. Three days after our midweek service where Pastor prayed specifically for divine opportunities, I got two job offers in one day.", date: "February 2025" },
  { id: 3, name: "Sister Grace Nwosu", category: "Family Restoration", text: "My marriage was on the verge of collapse. Through counselling and prayer at this church, God restored our home. Today we are stronger than ever.", date: "February 2025" },
];
 
function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
 
  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError(true);
    }
  }
 
  return (
    <div className="admin-login">
      <div className="login-box">
        <div className="login-logo">LFC</div>
        <h2>Admin Access</h2>
        <p>Enter the admin password to continue.</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          className={error ? 'input-error' : ''}
        />
        {error && <span className="error-msg">Incorrect password. Try again.</span>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
 
function BlogTab() {
  const [posts, setPosts] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [form, setForm] = useState({
    title: '', category: 'Faith', excerpt: '', body: '',
    author: 'Pastor Emmanuel',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    featured: false,
  });
 
  useEffect(() => {
    const saved = localStorage.getItem('lfc_posts');
    setPosts(saved ? JSON.parse(saved) : defaultPosts);
  }, []);
 
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }
 
  function handleSubmit() {
    if (!form.title || !form.excerpt || !form.body) { alert('Please fill in all required fields.'); return; }
    let updated = [...posts];
    if (form.featured) updated = updated.map((p) => ({ ...p, featured: false }));
    updated = [{ ...form, id: Date.now() }, ...updated];
    setPosts(updated);
    localStorage.setItem('lfc_posts', JSON.stringify(updated));
    setForm({ title: '', category: 'Faith', excerpt: '', body: '', author: 'Pastor Emmanuel', date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), featured: false });
    setSuccessMsg('Post published!');
    setTimeout(() => setSuccessMsg(''), 3000);
  }
 
  function handleDelete(id) {
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    localStorage.setItem('lfc_posts', JSON.stringify(updated));
  }
 
  return (
    <div className="tab-content">
      <div className="admin-section">
        <h2>Add New Post</h2>
        <div className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label>Post Title *</label>
              <input name="title" value={form.title} onChange={handleChange} placeholder="Enter post title" />
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
              <input name="author" value={form.author} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input name="date" value={form.date} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Short Excerpt * <span>(shown on the blog card)</span></label>
            <textarea name="excerpt" value={form.excerpt} onChange={handleChange} placeholder="Short summary..." rows={3} />
          </div>
          <div className="form-group">
            <label>Full Post Body * <span>(separate paragraphs with a blank line)</span></label>
            <textarea name="body" value={form.body} onChange={handleChange} placeholder="Full article..." rows={10} />
          </div>
          <div className="form-check">
            <input type="checkbox" name="featured" id="featured" checked={form.featured} onChange={handleChange} />
            <label htmlFor="featured">Set as Featured Post</label>
          </div>
          {successMsg && <div className="success-msg">{successMsg}</div>}
          <button className="admin-submit" onClick={handleSubmit}>Publish Post</button>
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
              <button className="delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
function TestimoniesTab() {
  const [testimonies, setTestimonies] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [form, setForm] = useState({
    name: '', category: 'Healing', text: '',
    date: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
  });
 
  useEffect(() => {
    const saved = localStorage.getItem('lfc_testimonies');
    setTestimonies(saved ? JSON.parse(saved) : defaultTestimonies);
  }, []);
 
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
 
  function handleSubmit() {
    if (!form.name || !form.text) { alert('Please fill in the name and testimony.'); return; }
    const updated = [{ ...form, id: Date.now() }, ...testimonies];
    setTestimonies(updated);
    localStorage.setItem('lfc_testimonies', JSON.stringify(updated));
    setForm({ name: '', category: 'Healing', text: '', date: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) });
    setSuccessMsg('Testimony added!');
    setTimeout(() => setSuccessMsg(''), 3000);
  }
 
  function handleDelete(id) {
    const updated = testimonies.filter((t) => t.id !== id);
    setTestimonies(updated);
    localStorage.setItem('lfc_testimonies', JSON.stringify(updated));
  }
 
  return (
    <div className="tab-content">
      <div className="admin-section">
        <h2>Add New Testimony</h2>
        <div className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name <span>(or type "Anonymous")</span></label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Sister Blessing Adeyemi" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={form.category} onChange={handleChange}>
                <option>Healing</option>
                <option>Financial Breakthrough</option>
                <option>Family Restoration</option>
                <option>Academic Success</option>
                <option>Salvation</option>
                <option>Divine Protection</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Date <span>(e.g. April 2025)</span></label>
            <input name="date" value={form.date} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Testimony *</label>
            <textarea name="text" value={form.text} onChange={handleChange} placeholder="Write the full testimony here..." rows={6} />
          </div>
          {successMsg && <div className="success-msg">{successMsg}</div>}
          <button className="admin-submit" onClick={handleSubmit}>Add Testimony</button>
        </div>
      </div>
 
      <div className="admin-section">
        <h2>All Testimonies ({testimonies.length})</h2>
        <div className="admin-posts-list">
          {testimonies.map((t) => (
            <div className="admin-post-item" key={t.id}>
              <div className="admin-post-info">
                <span className="featured-badge">{t.category}</span>
                <h3>{t.name}</h3>
                <p>{t.date} · {t.text.substring(0, 80)}...</p>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(t.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
function VideosTab() {
  const [videos, setVideos] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [form, setForm] = useState({ title: '', url: '', description: '', date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) });
 
  useEffect(() => {
    const saved = localStorage.getItem('lfc_videos');
    setVideos(saved ? JSON.parse(saved) : []);
  }, []);
 
  function getYouTubeId(url) {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    return match ? match[1] : null;
  }
 
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
 
  function handleSubmit() {
    if (!form.title || !form.url) { alert('Please fill in the title and YouTube link.'); return; }
    if (!getYouTubeId(form.url)) { alert('Please enter a valid YouTube link.'); return; }
    const updated = [{ ...form, id: Date.now() }, ...videos];
    setVideos(updated);
    localStorage.setItem('lfc_videos', JSON.stringify(updated));
    setForm({ title: '', url: '', description: '', date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) });
    setSuccessMsg('Video added!');
    setTimeout(() => setSuccessMsg(''), 3000);
  }
 
  function handleDelete(id) {
    const updated = videos.filter((v) => v.id !== id);
    setVideos(updated);
    localStorage.setItem('lfc_videos', JSON.stringify(updated));
  }
 
  return (
    <div className="tab-content">
      <div className="admin-section">
        <h2>Add New Video</h2>
        <div className="admin-form">
          <div className="form-group">
            <label>Video Title *</label>
            <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Walking Through Open Doors — Sunday Service" />
          </div>
          <div className="form-group">
            <label>YouTube Link * <span>(paste the full URL)</span></label>
            <input name="url" value={form.url} onChange={handleChange} placeholder="https://www.youtube.com/watch?v=..." />
          </div>
          <div className="form-group">
            <label>Description <span>(optional)</span></label>
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Brief description of the sermon or video..." rows={3} />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input name="date" value={form.date} onChange={handleChange} />
          </div>
          {successMsg && <div className="success-msg">{successMsg}</div>}
          <button className="admin-submit" onClick={handleSubmit}>Add Video</button>
        </div>
      </div>
 
      <div className="admin-section">
        <h2>All Videos ({videos.length})</h2>
        {videos.length === 0 ? (
          <p className="empty-msg">No videos added yet. Add your first video above!</p>
        ) : (
          <div className="video-list">
            {videos.map((v) => {
              const ytId = getYouTubeId(v.url);
              return (
                <div className="video-item" key={v.id}>
                  <div className="video-thumb">
                    {ytId
                      ? <img src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`} alt={v.title} />
                      : <div className="thumb-placeholder">No preview</div>
                    }
                  </div>
                  <div className="video-info">
                    <h3>{v.title}</h3>
                    <p>{v.date}</p>
                    {v.description && <p className="video-desc">{v.description}</p>}
                  </div>
                  <button className="delete-btn" onClick={() => handleDelete(v.id)}>Delete</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
 
function BlogAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('blog');
 
  if (!authenticated) return <LoginScreen onLogin={() => setAuthenticated(true)} />;
 
  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <span className="admin-label">Living Faith Church</span>
          <h1>Admin Dashboard</h1>
        </div>
        <button className="admin-logout" onClick={() => setAuthenticated(false)}>Logout</button>
      </div>
 
      <div className="admin-tabs">
        <button className={`tab-btn ${activeTab === 'blog' ? 'active' : ''}`} onClick={() => setActiveTab('blog')}>
          Blog Posts
        </button>
        <button className={`tab-btn ${activeTab === 'testimonies' ? 'active' : ''}`} onClick={() => setActiveTab('testimonies')}>
          Testimonies
        </button>
        <button className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => setActiveTab('videos')}>
          Videos
        </button>
      </div>
 
      {activeTab === 'blog' && <BlogTab />}
      {activeTab === 'testimonies' && <TestimoniesTab />}
      {activeTab === 'videos' && <VideosTab />}
    </div>
  );
}
 
export default BlogAdmin
 