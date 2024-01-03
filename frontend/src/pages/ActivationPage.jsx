import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../server';

const ActivationPage = () => {
    const navigate = useNavigate()
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await axios.post(`${server}/user/activation`, {
          activation_token,
        });

        console.log(response.data);

        // Check the response status or any other condition based on your API response
        if (response.data.success) {
          // Account activated successfully
          // You can redirect or show a success message here
          navigate("/")
        } else {
          // Handle other scenarios based on your API response
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    if (activation_token) {
      sendRequest();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {error ? (
        <p className="text-red-700">Your token is expired or invalid</p>
      ) : (
        <p>Your account has been activated successfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;
