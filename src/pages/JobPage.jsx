import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import spinner from '../assets/images/spinner.svg';
import '../index.css';
import { FaMapMarker, FaArrowLeft } from 'react-icons/fa';

function JobPage() {
  const { id } = useParams();
  const [job, setJobs] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      async function fetchJobs() {
        try {
          const response = await fetch(`/api/jobs/${id}`, {
            method: 'GET',
          });
          const data = await response.json();
          setJobs(data);
        } catch (error) {
          console.log('Error fetching data', error);
        } finally {
          setLoading(false);
        }
      }
      fetchJobs();
    }, 1500);
  }, []);
  return Loading ? (
    <img src={spinner} alt='spin' />
  ) : (
    <div className='job-page'>
      <div className='title-des-container'>
        <div className='job-tit'>
          <p>{job.type}</p>
          <h3>{job.title}</h3>
          <h4>
            <FaMapMarker style={{ color: 'blue' }} /> {job.location}
          </h4>
        </div>
        <div className='jon-des'>
          <h2>Job Description</h2>
          <p>{job.description}</p>
          <h4>Salary:</h4>
          <h5>{job.salary}</h5>
        </div>
        <Link
          style={{
            textDecoration: 'none',
            color: 'blue',
            width: '20%',
            height: '4%',
          }}
          to='/jobs'
        >
          <button
            style={{
              border: 'none',
              width: '100%',
              height: '100%',
              borderRadius: '0.4em',
              backgroundColor: 'grey',
              color: '#fff',
              placeContent: 'center',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5%',
            }}
          >
            <FaArrowLeft style={{ color: 'green' }} />
            Back To Jobs
          </button>
        </Link>
      </div>
      <div className='c-info'>
        <div className='actual-info'>
          <h3>Company Info</h3>
          <h4>{job.company.name}</h4>
          <p>{job.company.description}</p>
          <hr />
          <h3>Contact Email:</h3>
          <h4
            style={{
              backgroundColor: 'grey',
              width: '90%',
              height: '6%',
              placeContent: 'center',
              borderRadius: '0.2em',
              paddingLeft: '2%',
              color: '#fff',
              fontWeight: 'lighter',
            }}
          >
            {job.company.contactEmail}
          </h4>
          <h3>Contact Phone:</h3>
          <h4
            style={{
              backgroundColor: 'grey',
              width: '90%',
              height: '6%',
              placeContent: 'center',
              borderRadius: '0.2em',
              paddingLeft: '2%',
              fontWeight: 'lighter',
            }}
          >
            {job.company.contactPhone}
          </h4>
        </div>
        <div className='manageJob'>
          <h2>Manage Job</h2>
          <Link
            style={{ width: '80%', height: '30%' }}
            to={`/job/edit/${job.id}`}
          >
            <button style={{ height: '100%', width: '100%', color: '#fff' }}>
              Edit Job
            </button>
          </Link>
          <button style={{ backgroundColor: 'red' }}>Delete Job</button>
        </div>
      </div>
    </div>
  );
}

export default JobPage;
