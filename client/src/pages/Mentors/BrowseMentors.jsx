import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/api";

export default function BrowseMentors() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    API.get("/mentor/all").then((res) => {
      setMentors(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Browse Mentors</h2>

      {mentors.map((m) => (
        <div key={m._id} className="card">
          <h3>{m.user?.name}</h3>
          <p>Profession: {m.profession || "Not added"}</p>
          <p>Experience: {m.experience || 0} years</p>

          <Link to={`/mentor/${m.user._id}`}>
            <button>View Profile</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
