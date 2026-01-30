import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="grid">
      <button onClick={() => nav("/mentors")}>Browse Mentors</button>
      <button onClick={() => nav("/dashboard")}>Dashboard</button>
      <button onClick={() => nav("/verify")}>Verify Profile</button>
    </div>
  );
}
