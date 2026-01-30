import { useParams } from "react-router-dom";
import API from "../../services/api";

export default function BookSession() {
  const { id } = useParams();

  const book = async (price) => {
    await API.post("/booking/create", {
      mentorId: id,
      price
    });
    alert("Session Requested");
  };

  return (
    <div className="card">
      <h2>Book Session</h2>
      <button onClick={() => book(99)}>₹99 / 30 min</button>
      <button onClick={() => book(199)}>₹199 / 1 hour</button>
    </div>
  );
}
