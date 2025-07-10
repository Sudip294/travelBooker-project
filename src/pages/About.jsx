const About = () => {
  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">About TravelBooker</h1>
            <p className="lead text-muted">
              Your trusted partner in creating unforgettable travel experiences since 2020
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
              alt="Travel landscape" 
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Our Story</h2>
            <p className="text-muted mb-4">
              Founded by a team of passionate travelers, TravelBooker was born from the desire to make 
              extraordinary travel experiences accessible to everyone. We believe that travel has the 
              power to transform lives, broaden perspectives, and create lasting memories.
            </p>
            <p className="text-muted mb-4">
              What started as a small startup has grown into a trusted platform serving thousands of 
              travelers worldwide. Our commitment to quality, safety, and exceptional service remains 
              at the heart of everything we do.
            </p>
            <div className="row text-center">
              <div className="col-4">
                <h3 className="fw-bold text-primary">50K+</h3>
                <p className="text-muted mb-0">Happy Travelers</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold text-primary">100+</h3>
                <p className="text-muted mb-0">Destinations</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold text-primary">4.9</h3>
                <p className="text-muted mb-0">Average Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="text-primary mb-3">
                  <i className="bi bi-bullseye fs-1"></i>
                </div>
                <h4 className="fw-bold mb-3">Our Mission</h4>
                <p className="text-muted">
                  To inspire and enable people to explore the world by providing exceptional travel 
                  experiences that are safe, affordable, and unforgettable. We strive to connect 
                  cultures and create meaningful connections through travel.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="text-primary mb-3">
                  <i className="bi bi-eye fs-1"></i>
                </div>
                <h4 className="fw-bold mb-3">Our Vision</h4>
                <p className="text-muted">
                  To become the world's most trusted travel platform, where every journey is 
                  seamlessly planned and every destination becomes a gateway to personal growth 
                  and cultural understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold">Our Values</h2>
            <p className="text-muted">The principles that guide everything we do</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="text-center">
              <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="bi bi-shield-check fs-2"style={{ color: 'black' }}></i>
              </div>
              <h5 className="fw-bold">Safety First</h5>
              <p className="text-muted">Your safety and security are our top priorities in every destination we offer.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="text-center">
              <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="bi bi-heart fs-2"style={{ color: 'black' }}></i>
              </div>
              <h5 className="fw-bold">Authentic Experiences</h5>
              <p className="text-muted">We curate genuine, local experiences that connect you with the true spirit of each destination.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="text-center">
              <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="bi bi-people fs-2"style={{ color: 'black' }}></i>
              </div>
              <h5 className="fw-bold">Customer Centric</h5>
              <p className="text-muted">Every decision we make is focused on enhancing your travel experience and satisfaction.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="text-center">
              <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="bi bi-leaf fs-2"style={{ color: 'black' }}></i>
              </div>
              <h5 className="fw-bold">Sustainability</h5>
              <p className="text-muted">We promote responsible travel that respects local communities and preserves natural environments.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold">Meet Our Team</h2>
            <p className="text-muted">The passionate individuals behind your amazing travel experiences</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm card-hover">
              <div className="card-body text-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="CEO" 
                  className="rounded-circle mb-3"
                  style={{width: '100px', height: '100px', objectFit: 'cover'}}
                />
                <h5 className="fw-bold">John Anderson</h5>
                <p className="text-primary mb-2">CEO & Founder</p>
                <p className="text-muted small">
                  Travel enthusiast with 15+ years in the tourism industry, passionate about creating exceptional experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm card-hover">
              <div className="card-body text-center p-4">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1682437826626-044d1234806d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENvcnBvcmF0ZSUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="CTO" 
                  className="rounded-circle mb-3"
                  style={{width: '100px', height: '100px', objectFit: 'cover'}}
                />
                <h5 className="fw-bold">Sarah Chen</h5>
                <p className="text-primary mb-2">Head of Operations</p>
                <p className="text-muted small">
                  Operations expert ensuring smooth travel experiences and maintaining our high service standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm card-hover">
              <div className="card-body text-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Travel Director" 
                  className="rounded-circle mb-3"
                  style={{width: '100px', height: '100px', objectFit: 'cover'}}
                />
                <h5 className="fw-bold">Michael Rodriguez</h5>
                <p className="text-primary mb-2">Travel Director</p>
                <p className="text-muted small">
                  Destination specialist who personally visits and curates every location in our portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row">
          <div className="col-12">
            <div className="bg-primary-custom text-black rounded p-5 text-center ">
              <h3 className="fw-bold mb-3">Ready to Start Your Journey?</h3>
              <p className="mb-4">
                Join thousands of satisfied travelers who have discovered the world with TravelBooker
              </p>
              <a href="/destinations" className="btn btn-light btn-lg btn-custom">
                <i className="bi bi-compass me-2"></i>
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About