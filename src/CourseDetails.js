import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams(); // Extracts the id from the URL

  return <div>Course Details for ID: {id}</div>;
};
