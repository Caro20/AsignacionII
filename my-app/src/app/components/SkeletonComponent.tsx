import { Skeleton } from '@mui/material';

const SkeletonComponent = () => {
  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <Skeleton
          variant="rectangular"
          width={230}
          height={130}
          style={{ backgroundColor: '#e9dbc8' }}
        />
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <Skeleton
          animation="wave"
          height={40}
          style={{ marginBottom: '0.5rem', backgroundColor: '#e9dbc8' }}
        />
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <Skeleton
          animation="wave"
          height={20}
          style={{ marginBottom: '0.5rem', backgroundColor: '#e9dbc8' }}
        />
        <Skeleton
          animation="wave"
          height={20}
          width="80%"
          style={{ backgroundColor: '#e9dbc8' }}
        />
      </div>

      <div>
        <Skeleton
          animation="wave"
          height={40}
          width={100}
          style={{ marginRight: '1rem', backgroundColor: '#e9dbc8' }}
        />
        <Skeleton
          animation="wave"
          height={40}
          width={100}
          style={{ backgroundColor: '#e9dbc8' }}
        />
      </div>
    </div>
  );
};

export default SkeletonComponent;
