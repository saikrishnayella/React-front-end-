import React, { useState, useEffect } from 'react';
import axios from 'axios';
 // Custom CSS for this component

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="frame">
      <img src="/images/user_image.jpg" alt="Users" className="image-frame" />
      <div className="content-frame">
        <h2>Our Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
