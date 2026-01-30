import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="card">
      <h2>Dashboard</h2>

      {user.role !== "mentor" ? (
        <>
          <p>You are not a mentor yet.</p>
          <button>Become a Mentor</button>
        </>
      ) : (
        <>
          <p>Sessions Given: 0</p>
          <p>Sessions Taken: 0</p>

          <button>Requested Sessions</button>
          <button>Upcoming Sessions</button>
        </>
      )}
    </div>
  );
}
