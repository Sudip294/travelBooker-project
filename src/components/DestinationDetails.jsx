import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../data/mockData';
import { reviews } from '../data/reviewData';
import './DestinationDetails.css';

function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(dest => dest.id === parseInt(id));
  const allThumbnails = destination
    ? [destination.image, ...(destination.thumbnails?.filter(t => t !== destination.image) || [])]
    : [];
  const [mainImg, setMainImg] = useState(destination?.image);
  const [imgAnim, setImgAnim] = useState(false);

  // Skeleton and image loading state
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Thumbnails loading/error state
  const [thumbsLoaded, setThumbsLoaded] = useState(Array(allThumbnails.length).fill(false));
  const [thumbsError, setThumbsError] = useState(Array(allThumbnails.length).fill(false));

  // Review avatars loading/error state
  const [reviewAvatarsLoaded, setReviewAvatarsLoaded] = useState({});
  const [reviewAvatarsError, setReviewAvatarsError] = useState({});

  useEffect(() => {
    // Simulate loading delay (replace with real data loading if needed)
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setImgLoaded(false);
    setImgError(false);
  }, [mainImg]);

  useEffect(() => {
    setThumbsLoaded(Array(allThumbnails.length).fill(false));
    setThumbsError(Array(allThumbnails.length).fill(false));
  }, [allThumbnails.length]);

  // Review logic: randomize and vertical scroll
  const destinationReviews = useMemo(() => {
    const shuffled = [...reviews];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [destination?.id]);
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 3;
  const canScrollUp = visibleStart > 0;
  const canScrollDown = visibleStart + visibleCount < destinationReviews.length;

  const handleScrollUp = () => setVisibleStart(s => Math.max(0, s - 1));
  const handleScrollDown = () => setVisibleStart(s => Math.min(destinationReviews.length - visibleCount, s + 1));

  const handleThumbnailClick = (thumb) => {
    if (thumb !== mainImg) {
      setMainImg(thumb);
      setImgAnim(false);
      setTimeout(() => setImgAnim(true), 10);
    }
  };

  if (!destination) {
    return <div className="text-center mt-5">Destination not found.</div>;
  }

  // SKELETON PLACEHOLDER
  if (loading) {
    return (
      <div className="container py-5 fade-in-detail mt-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="skeleton-img mb-3"></div>
            <div className="d-flex gap-2 justify-content-center">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="skeleton-thumbnail"></div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skeleton-title mb-3"></div>
            <div className="skeleton-text mb-2"></div>
            <div className="skeleton-text mb-2" style={{ width: '60%' }}></div>
            <div className="skeleton-list mb-4"></div>
            <div className="skeleton-btn mb-4"></div>
            <div className="skeleton-review-list">
              {[1, 2, 3].map(i => (
                <div key={i} className="skeleton-review-card mb-3"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 fade-in-detail" style={{ paddingTop: '100px' }}>
      <button className="back-btn-custom mb-4" style={{ marginTop: '80px' }} onClick={() => {
        navigate('/destinations');
        window.scrollTo(0, 0);
      }}>
        <i className="bi bi-arrow-left" style={{ fontSize: '1.3rem', verticalAlign: 'middle' }}></i>
        <span style={{ verticalAlign: 'middle' }}>Back</span>
      </button>
      <div className="row align-items-center g-5">
        {/* Left: Fixed image and thumbnails */}
        <div className="col-lg-6">
          <div className="img-zoom-container mb-3" style={{ position: 'relative' }}>
            {(!imgLoaded || imgError) && (
              <div className="skeleton-img" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}></div>
            )}
            <img
              src={mainImg}
              alt={destination.title}
              className={`img-fluid rounded shadow-lg detail-img${imgAnim ? ' img-animate' : ''}`}
              style={{
                width: '100%',
                maxHeight: '450px',
                objectFit: 'cover',
                display: imgLoaded && !imgError ? 'block' : 'none',
                position: 'relative',
                zIndex: 3
              }}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              onAnimationEnd={() => setImgAnim(false)}
            />
          </div>
          <div className="thumbnails-row">
            {allThumbnails.map((thumb, idx) => (
              <div key={idx} style={{ position: 'relative', width: '80px', height: '60px' }}>
                {(!thumbsLoaded[idx] || thumbsError[idx]) && (
                  <div
                    className="skeleton-thumbnail"
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      zIndex: 2
                    }}
                  ></div>
                )}
                <img
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`thumbnail-img${mainImg === thumb ? ' active' : ''}`}
                  style={{
                    width: '80px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                    border: mainImg === thumb ? '2px solid #4f8cff' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'border 0.2s',
                    display: thumbsLoaded[idx] && !thumbsError[idx] ? 'block' : 'none',
                    position: 'relative',
                    zIndex: 3
                  }}
                  onClick={() => handleThumbnailClick(thumb)}
                  onLoad={() => setThumbsLoaded(loaded => {
                    const arr = [...loaded];
                    arr[idx] = true;
                    return arr;
                  })}
                  onError={() => setThumbsError(error => {
                    const arr = [...error];
                    arr[idx] = true;
                    return arr;
                  })}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Details and scrollable reviews */}
        <div className="col-lg-6 mt-lg-0">
          <div className="details-scrollable">
            <h1 className="display-5 fw-bold mb-3">{destination.title}</h1>
            <p className="lead text-muted mb-3">{destination.description}</p>
            <ul className="list-unstyled mb-4">
              <li><strong>Location:</strong> {destination.location}</li>
              <li><strong>Duration:</strong> {destination.duration}</li>
              <li><strong>Price:</strong> ${destination.price} / person</li>
              <li><strong>Rating:</strong> <span className="text-warning">{destination.rating} &#9733;</span></li>
            </ul>
            <div className="mb-3">
              <strong>More Info:</strong>
              <p className="mb-0">{destination.moreInfo}</p>
            </div>
            <button
              className="btn btn-primary-custom btn-lg shadow book-now-animated"
              onClick={() =>
                navigate('/booking', {
                  state: { selectedDestination: destination.title }
                })
              }
            >
              <i className="bi bi-calendar-check me-2"></i>
              Book Now
            </button>
            {/* Review List */}
            <div className="review-list">
              <h5 className="mb-3 mt-4">Reviews</h5>
              {canScrollUp && (
                <button className="review-scroll-btn-vert" onClick={handleScrollUp}>
                  <i className="bi bi-chevron-up"></i>
                </button>
              )}
              {destinationReviews.slice(visibleStart, visibleStart + visibleCount).map((review) => (
                <div className="review-card" key={review.id}>
                  <div className="review-avatar" style={{ position: 'relative', width: '48px', height: '48px' }}>
                    {(!reviewAvatarsLoaded[review.id] || reviewAvatarsError[review.id]) && (
                      <div
                        className="skeleton-thumbnail"
                        style={{
                          width: '48px',
                          height: '48px',
                          position: 'absolute',
                          top: 0, left: 0, right: 0, bottom: 0,
                          zIndex: 2,
                          borderRadius: '50%'
                        }}
                      ></div>
                    )}
                    <img
                      src={review.avatar}
                      alt={review.user}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #4f8cff',
                        display: reviewAvatarsLoaded[review.id] && !reviewAvatarsError[review.id] ? 'block' : 'none',
                        position: 'relative',
                        zIndex: 3
                      }}
                      onLoad={() =>
                        setReviewAvatarsLoaded(prev => ({ ...prev, [review.id]: true }))
                      }
                      onError={() =>
                        setReviewAvatarsError(prev => ({ ...prev, [review.id]: true }))
                      }
                    />
                  </div>
                  <div className="review-content">
                    <div className="review-user">{review.user}</div>
                    <div className="review-desc">{review.desc}</div>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${i < review.rating ? 'bi-star-fill' : 'bi-star'} text-warning`}
                        ></i>
                      ))}
                    </div>
                    <div className="review-actions">
                      <span className="like">
                        <i className="bi bi-hand-thumbs-up"></i> {review.likes}
                      </span>
                      <span className="dislike ms-3">
                        <i className="bi bi-hand-thumbs-down"></i> {review.dislikes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {canScrollDown && (
                <button className="review-scroll-btn-vert" onClick={handleScrollDown}>
                  <i className="bi bi-chevron-down"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
