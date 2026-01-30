import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <h2>ConnectPro</h2>

      {user && (
        <div style={styles.links}>
          <Link to="/home">Home</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    padding: "15px 30px",
    background: "#4f46e5",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
};
