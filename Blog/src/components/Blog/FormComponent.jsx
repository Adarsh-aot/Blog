import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../Constant/Base_Url';


function FormComponent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/Blog`, {
        title,
        content
      },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
      console.log('Response:', response.data);
      setMessage('Successfully submitted!');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error submitting. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-xl font-medium text-gray-700 mb-2">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg p-3"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-xl font-medium text-gray-700 mb-2">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg p-3"
            rows="8"
          />
        </div>
        <div className="flex justify-between items-center pt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate('/Blog')}
            className="px-6 py-3 bg-gray-300 text-gray-700 text-lg rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300"
          >
            Back to Blog
          </button>
        </div>
      </form>
      {message && (
        <div className={`mt-6 p-4 rounded-lg text-lg ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default FormComponent;