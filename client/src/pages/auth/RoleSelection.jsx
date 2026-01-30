import API from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();

  const selectRole = async (role) => {
    try {
      await API.post("/auth/role", { role });
      navigate("/verify");
    } catch (err) {
      console.error(err);
      alert("Login expired. Please login again.");
      navigate("/");
    }
  };

  return (
    <div className="card">
      <h2>Select Your Role</h2>

      <button onClick={() => selectRole("mentee")}>
        I want a Mentor
      </button>

      <button onClick={() => selectRole("mentor")}>
        I want to be a Mentor
      </button>
    </div>
  );
}
