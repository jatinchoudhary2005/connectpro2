import API from "../../services/api";

export default function Verification() {
  const submit = async () => {
    await API.post("/mentor/verify");
    alert("Verification sent");
  };

  return (
    <div className="card">
      <h2>Profile Verification</h2>
      <button onClick={submit}>Verify Profile</button>
    </div>
  );
}
