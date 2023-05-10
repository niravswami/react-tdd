import React, { useEffect, useState } from "react";
import { GET_USERS_URL } from "../../mocks/handlers";

export default function Users() {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(GET_USERS_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError("Error fetching users"));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((userName) => (
          <li key={userName}>{userName}</li>
        ))}
      </ul>
    </div>
  );
}
