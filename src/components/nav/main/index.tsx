import React from "react";
import { Link } from "gatsby";

export default function MainNav() {
  return (
    <div>
      <Link to="/" className="m-3">
        about
      </Link>
      <Link to="/photography" className="m-3">
        photography
      </Link>
      <Link to="/software" className="m-3">
        software
      </Link>
    </div>
  );
}
