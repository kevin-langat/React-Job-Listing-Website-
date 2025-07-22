import {
  FaPlugCircleExclamation,
  FaTriangleExclamation,
} from 'react-icons/fa6';

function NotFoundPage() {
  return (
    <div
      style={{
        widows: '100%',
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FaTriangleExclamation
        style={{
          color: 'red',
          width: '10vh',
          height: '10vh',
        }}
      />
      <p>404 Not Found</p>
      <h2>Oops! The Page Was Not Found</h2>
    </div>
  );
}

export default NotFoundPage;
