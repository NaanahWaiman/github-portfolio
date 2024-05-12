// src/components/Home.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [displayedRepos, setDisplayedRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await axios.get('https://api.github.com/users/sadiq-codes/repos');
      setRepos(res.data);
      setDisplayedRepos(res.data);
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const filteredRepos = repos.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedRepos(filteredRepos);
    setCurrentPage(1); // Reset to first page on search/filter change
  }, [searchTerm, repos]);

  // Pagination logic
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = displayedRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(displayedRepos.length / reposPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mx-auto px-4'>
      <h1 className="text-2xl font-bold my-4">My GitHub Repositories</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search repositories..."
        className="p-2 border border-gray-300 rounded-lg mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentRepos.map(repo => (
          <div key={repo.id} className="p-4 shadow rounded-lg">
            <Link to={`/repo/${repo.owner.login}/${repo.name}`} className="text-blue-600 hover:underline">
              {repo.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
