import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [planetsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:4000/planets');
			console.log("AAAAAAAA",res.data.next)
      setPlanets(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * planetsPerPage;
  const indexOfFirstPost = indexOfLastPost - planetsPerPage;


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>

      <Pagination
        postsPerPage={planetsPerPage}
        totalPlanets={planets.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Planets;
