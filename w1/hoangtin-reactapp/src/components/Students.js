import axios from 'axios';
import React, { useState, useEffect } from 'react';

const URL =
  'https://yjqhprq4psipswxmkseuihxzdq0kebfw.lambda-url.us-east-1.on.aws/';

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetching data
    setLoading(true);
    axios
      .get(URL)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Students</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Students;
