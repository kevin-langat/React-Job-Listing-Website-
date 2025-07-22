import { useState } from 'react';
import '../index.css';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router';

function JobListing({ item }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = item.description;

  if (!showFullDescription) {
    description = description.slice(0, 110) + '...';
  }

  return (
    <div className='each-job'>
      <p>{item.type}</p>
      <h3>{item.title}</h3>
      <p>{description}</p>
      <button
        onClick={() => setShowFullDescription((prevSate) => !prevSate)}
        style={{
          backgroundColor: 'transparent',
          color: 'blue',
          textDecoration: 'underline',
        }}
      >
        {showFullDescription ? 'Less' : 'More'}
      </button>

      <p style={{ fontWeight: 'bold', fontSize: 'smaller' }}>
        Salary: {item.salary}
      </p>
      <h5>
        <FaMapMarker style={{ color: 'blue' }} /> {item.location}
      </h5>
      <Link to={`/jobs/${item.id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
}

export default JobListing;
