import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/me').then(res => {
      setUser(res.data.user);
    }).catch(() => {
      window.location.href = "/auth/discord";
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome {user.username}</h1>
      <p>You have {user.points} points</p>

      {user.is_admin && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
          {/* Admin tools here */}
        </div>
      )}
    </div>
  );
}