import '../index.css';
function HireNowPage() {
  return (
    <div className='add-job-container'>
      <h3>Add Job</h3>
      <div className='add-info-container'>
        <div className='job-type-container'>
          <h5>Job Type</h5>
          <select name='select-type' id='select-type'>
            <option value='Part-Time'>Part-Time</option>
            <option value='Full-Time'>Full-Time</option>
            <option value='Remote-Time'>Remote</option>
          </select>
        </div>

        <div className='job-name-container'>
          <h5>Job Listing Name</h5>
          <input
            type='text'
            id='JobListingName'
            placeholder='Mern Stack Dev etc.'
          />
        </div>

        <div className='job-description-container'>
          <h5>Job Description</h5>
          <input
            type='text'
            id='JobDescription'
            placeholder='Add any relevant job information, duties,requirements etc. '
          />
        </div>

        <div className='job-salary-container'>
          <h5>Job Salary</h5>
          <label htmlFor='JobDescription'></label>
          <select name='selectSalary' id='salarySelect'>
            <option value='under50'>Under $50K</option>
            <option value='50-70'>$50K - $80K</option>
            <option value='70-90'>$70K - $90K</option>
            <option value='90-110'>$90K - $110K</option>
            <option value='110andAbove'>Above $110K</option>
          </select>
        </div>

        <div className='company-location-container'>
          <h5>Location</h5>
          <input
            type='text'
            id='JobDescription'
            placeholder='Company Location'
          />
        </div>

        <div className='company-name-container'>
          <h4>Company Info</h4>
          <h5>Company Name</h5>
          <input type='text' id='JobDescription' placeholder='Company Name' />
        </div>

        <div className='company-description-container'>
          <h5>Company Description</h5>
          <input
            type='text'
            id='JobDescription'
            placeholder='Company Description'
          />
        </div>

        <div className='job-contactEmail-container'>
          <h5>Company Contact Email</h5>
          <input
            type='email'
            id='CompanyEmail'
            placeholder='company@gmail.com'
          />
        </div>

        <div className='job-contactPhone-container'>
          <h5>Company Contact Phone</h5>
          <input type='number' id='CompanyPhone' placeholder='0722-555-666' />
        </div>
        <button>Post Job</button>
      </div>
    </div>
  );
}

export default HireNowPage;
