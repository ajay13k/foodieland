import React, { useState, useEffect } from "react";
import { Center } from "@chakra-ui/react";
import Pagination from "../componets/pagination";
import Posts from "../componets/posts";
import axios from "axios";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
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
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Posts posts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
    </>
  );
};

export default Blog;
