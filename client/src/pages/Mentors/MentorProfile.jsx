import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../services/api";

export default function MentorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    API.get("/mentor/all").then((res) => {
      const found = res.data.find((m) => m.user._id === id);
      setMentor(found);
    });
  }, [id]);

  if (!mentor) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>{mentor.user.name}</h2>
      <p>Profession: {mentor.profession}</p>
      <p>Experience: {mentor.experience} years</p>
      <p>{mentor.bio || "No bio added"}</p>

      <button onClick={() => navigate(`/book/${mentor.user._id}`)}>
        Book Session
      </button>
    </div>
  );
}
