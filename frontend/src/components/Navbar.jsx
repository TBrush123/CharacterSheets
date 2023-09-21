import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Main Page</h1>
      </Link>
    </div>
  );
};

export default Navbar;
