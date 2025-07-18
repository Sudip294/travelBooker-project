import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Breathtaking Destinations for 2024",
    excerpt: "Discover the most stunning places to visit this year, from hidden gems to world-famous wonders. Our curated list includes must-see locations, travel tips, and the best times to visit. Whether you crave adventure, relaxation, or cultural immersion, these destinations have something for everyone. Start planning your next adventure with us!",
    image: "https://images.unsplash.com/photo-1535745122259-f1e187953c4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvcCUyMDEwJTIwZGVzdGluYXRpb258ZW58MHwwfDB8fHww?auto=format&fit=crop&w=600&q=80",
    author: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "2024-05-01",
    tags: ["Destinations", "Inspiration"]
  },
  {
    id: 2,
    title: "How to Book the Perfect Vacation on a Budget",
    excerpt: "Travel smart! Learn tips and tricks for finding the best deals, saving money, and making the most of your travel budget. We cover flight hacks, affordable accommodations, and how to enjoy luxury experiences without breaking the bank. Your dream vacation is closer than you think.",
    image: "https://images.unsplash.com/photo-1560332944-d047e59ac9b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG93JTIwdG8lMjBib29rJTIwcGVyZmVjdCUyMHZhY2F0aW9ufGVufDB8MHwwfHx8MA%3D%3D?auto=format&fit=crop&w=600&q=80",
    author: "Alex Kim",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2024-04-18",
    tags: ["Tips", "Budget"]
  },
  {
    id: 3,
    title: "Family-Friendly Travel: Best Places for Kids",
    excerpt: "Explore destinations and activities that are perfect for families with children, ensuring fun and safety for everyone. From theme parks to nature reserves, we highlight the best spots for family bonding and unforgettable memories.",
    image: "https://images.unsplash.com/photo-1687660187066-dc7e95eb3c5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFtaWx5JTIwRnJpZW5kbHklMjBUcmF2ZWwlM0ElMjBCZXN0JTIwUGxhY2VzJTIwZm9yJTIwS2lkc3xlbnwwfDB8MHx8fDA%3D?auto=format&fit=crop&w=600&q=80",
    author: "Sara Lee",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    date: "2024-03-30",
    tags: ["Family", "Activities"]
  },
  {
    id: 4,
    title: "Solo Travel: Empowering Journeys Around the World",
    excerpt: "Thinking of traveling alone? Here’s how to make the most of your solo adventures and stay safe on the road. We share inspiring stories, safety tips, and the best destinations for solo travelers.",
    image: "https://plus.unsplash.com/premium_photo-1677196297939-d3b6b4aa2975?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sbyUyMHRyYXZlbGluZ3xlbnwwfDB8MHx8fDA%3D?auto=format&fit=crop&w=600&q=80",
    author: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    date: "2024-03-10",
    tags: ["Solo", "Inspiration"]
  },
  {
    id: 5,
    title: "The Ultimate Guide to Sustainable Travel",
    excerpt: "Learn how to minimize your environmental impact while exploring the world. This guide covers eco-friendly accommodations, responsible wildlife tourism, and tips for reducing your carbon footprint on every trip. Make your adventures meaningful and help preserve our planet for future generations.",
    image: "https://images.unsplash.com/photo-1536625820882-a9f1f36a7baa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoZSUyMFVsdGltYXRlJTIwR3VpZGUlMjB0byUyMFN1c3RhaW5hYmxlJTIwVHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D?auto=format&fit=crop&w=600&q=80",
    author: "Maya Green",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    date: "2024-02-20",
    tags: ["Sustainability", "Tips"]
  },
  {
    id: 6,
    title: "Packing Like a Pro: Essentials for Every Traveler",
    excerpt: "Never forget the important stuff again! Our packing checklist and expert advice will help you travel lighter, smarter, and stress-free. From must-have gadgets to space-saving hacks, get ready for your next journey with confidence.",
    image: "https://images.unsplash.com/photo-1509650926597-25eead3b6ca9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=600&q=80",
    author: "Liam Patel",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    date: "2024-01-28",
    tags: ["Packing", "Tips"]
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1614567888504-4e29674e2605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRyYXZlbCUyME1vbWVudHN8ZW58MHwwfDB8fHww?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1645168596917-306f620103c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VHJhdmVsJTIwTW9tZW50c3xlbnwwfDB8MHx8fDA%3Dhttps://images.unsplash.com/photo-1645168596917-306f620103c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VHJhdmVsJTIwTW9tZW50c3xlbnwwfDB8MHx8fDA%3D?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1514192527093-19e2e595dbdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFRyYXZlbCUyME1vbWVudHN8ZW58MHwwfDB8fHww?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1691328162670-f64190057201?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFRyYXZlbCUyME1vbWVudHN8ZW58MHwwfDB8fHww?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1694717459438-c38bebd13af5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fFRyYXZlbCUyME1vbWVudHN8ZW58MHwwfDB8fHww?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1682887157005-aea911309bde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fFRyYXZlbCUyME1vbWVudHN8ZW58MHwwfDB8fHww?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1574474146014-ce4230fa3766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fFRyYXZlbCUyME1vbWVudHN8ZW58MHwwfDB8fHww?auto=format&fit=crop&w=400&q=80"
];

export default function Blog() {
  return (
    <div className="container py-5 fade-in-detail" style={{ maxWidth: 1100 }}>
      <div className="text-center mb-5 mt-5">
        <h1 className="display-5 fw-bold mb-2">Travel Blog</h1>
        <p className="lead text-muted mb-0">
          Get inspired, informed, and ready for your next journey with our latest travel stories, tips, and photo highlights.
        </p>
      </div>
      <div className="row g-4">
        {blogPosts.map((post, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={post.id}>
            <div className="blog-card" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="blog-img-wrap">
                <img src={post.image} alt={post.title} className="blog-img" />
                <div className="blog-tags">
                  {post.tags.map((tag, i) => (
                    <span className="badge bg-primary-custom me-1" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="blog-body">
                <h4 className="fw-semibold mb-2 blog-title">{post.title}</h4>
                <p className="text-muted mb-3">{post.excerpt}</p>
                <div className="d-flex align-items-center blog-meta mb-2">
                  <div className="blog-author-avatar me-2">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #4f8cff"
                      }}
                    />
                  </div>
                  <div>
                    <span className="fw-semibold">{post.author}</span>
                    <span className="text-muted ms-2" style={{ fontSize: "0.95em" }}>
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <a href="#" className="blog-readmore">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div className="blog-card-hover"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Collage */}
      <div className="blog-gallery-section mt-5">
        <h2 className="fw-bold text-center mb-4">Travel Moments Gallery</h2>
        <div className="blog-gallery-collage">
          <div className="gallery-col gallery-col-1">
            <img src={galleryImages[0]} alt="Gallery 1" className="gallery-img" />
            <img src={galleryImages[1]} alt="Gallery 2" className="gallery-img" />
            <img src={galleryImages[2]} alt="Gallery 2" className="gallery-img" />
          </div>
          <div className="gallery-col gallery-col-2">
            <img src={galleryImages[3]} alt="Gallery 3" className="gallery-img tall" />
          </div>
          <div className="gallery-col gallery-col-3">
            <img src={galleryImages[4]} alt="Gallery 4" className="gallery-img" />
            <img src={galleryImages[5]} alt="Gallery 5" className="gallery-img" />
            <img src={galleryImages[6]} alt="Gallery 6" className="gallery-img" />
          </div>
        </div>
      </div>
    </div>
  );
}