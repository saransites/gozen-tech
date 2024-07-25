import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./Redux/Slice";
export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <button
        onClick={handleLogout}
        className="p-2 px-6 bg-red-500 rounded text-white hover:scale-95 transition duration-500"
      >
        Logout
      </button>
    </>
  );
};
