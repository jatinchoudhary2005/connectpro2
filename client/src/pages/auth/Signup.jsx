import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/signup", form);
    navigate("/role");
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" type="password"
        onChange={e => setForm({...form, password:e.target.value})}/>
      <button>Create Account</button>
    </form>
  );
}
