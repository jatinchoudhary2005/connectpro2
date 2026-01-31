import API from "../../services/api";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();

  const submitProfile = async () => {
    try {
      await API.post("/mentor/profile", {
        profession,
        qualification,
        experience,
      });

      navigate("/home"); // ✅ frontend route
    } catch (err) {
      console.error(err);
      alert("Profile save failed");
    }
  };

  return (
    <div>
      <h2>Verify Profile</h2>
      <button onClick={submitProfile}>Verify Profile</button>
      <button onClick={() => navigate("/home")}>Skip for now</button>
    </div>
  );
};

export default Verification;
