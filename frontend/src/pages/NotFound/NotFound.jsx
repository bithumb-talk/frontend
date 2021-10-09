import { Link } from 'react-router-dom';
import orange404 from '@/assets/image/orange404.png';

const NotFound = () => (
  <div style={{ textAlign: 'center', margin: '5em' }}>
    <img src={orange404} alt="404" width="400" height="300" />
    <div style={{ fontSize: '3em', margin: '1rem' }}>아무것도 없어요</div>
    <Link to="/" style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          background: '#f90',
          color: 'white',
          fontSize: '1.2em',
          width: '150px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        홈으로
      </div>
    </Link>
  </div>
);

export default NotFound;
