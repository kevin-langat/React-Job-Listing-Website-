import { Link } from 'react-router';
function ViewMoreSection({ isHome }) {
  return (
    <Link
      style={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
      }}
      to='/jobs'
    >
      <button
        style={
          isHome ? { width: '80%', borderRadius: '0.5em' } : { display: 'none' }
        }
      >
        View All Jobs
      </button>
    </Link>
  );
}

export default ViewMoreSection;
