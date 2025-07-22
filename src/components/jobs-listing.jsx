import { useState, useEffect } from 'react';
import Spinner from '../assets/images/spinner.svg';
import '../index.css';
import JobListing from './jobListing';
import ViewMoreSection from './ViewMoreSection';

function JobsListing({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      async function fetchJobs() {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      fetchJobs();
    }, 2000);
  }, []);
  return (
    <div className='jobs-listing'>
      {loading ? (
        <img src={Spinner} alt='spin' />
      ) : (
        <div className='jobs-container'>
          {jobs.map((item) => (
            <JobListing key={item.id} item={item} />
          ))}
        </div>
      )}

      <ViewMoreSection isHome={isHome} />
    </div>
  );
}

export default JobsListing;
