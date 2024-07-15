import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardBlog from './CardBlog';
import axios from 'axios';

function BlogDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/Blog/${id}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog post</p>;

  return (
    <>
      {data ? (
        <CardBlog id={data.id} type={false} title={data.title} content={data.content} />
      ) : (
        <p>No blog post found</p>
      )}
    </>
  );
}

export default BlogDetail;