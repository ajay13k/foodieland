import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import Posts from "./blogPosts";
import axios from "axios";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    window.scroll(0, 0);
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://foodielandnod.herokuapp.com/api/getAllBlog"
      );
      console.log("kushwah", res);
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    window.scroll(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Blog;
