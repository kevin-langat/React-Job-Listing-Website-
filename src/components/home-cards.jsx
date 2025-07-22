import { Link } from 'react-router';
import Card from './card';
function HomeCards({ DevCardtTitle, DevCardtInfo }) {
  return (
    <Card>
      <div className='each-card'>
        <h3>{DevCardtTitle}</h3>
        <p>{DevCardtInfo}</p>
        <button>Browse Jobs</button>
      </div>
      <div className='each-card'>
        <h3>For Employers</h3>
        <p>List your jobs and get a talent to do your work</p>
        <Link to='/hire'>
          <button
            style={{
              backgroundColor: '#000',
              width: '100%',
              height: '100%',
              color: '#fff',
              padding: '0.3em',
            }}
          >
            Hire Now
          </button>
        </Link>
      </div>
    </Card>
  );
}

export default HomeCards;
