// src/components/Repository.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Repository = () => {
  const [repoDetails, setRepoDetails] = useState({});
  const { username, repoName } = useParams();

  useEffect(() => {
    const fetchRepoDetails = async () => {
      const res = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
      setRepoDetails(res.data);
    };

    fetchRepoDetails();
  }, [username, repoName]);

  return (
    <div className='container mx-auto px-4 py-4'>
      <div className="p-4 shadow rounded-lg">
        <h1 className="text-2xl font-bold">{repoDetails.name}</h1>
        <p className="text-gray-700 mt-2">{repoDetails.description}</p>
        {/* You can add more details here */}
      </div>
    </div>
  );
};

export default Repository;
