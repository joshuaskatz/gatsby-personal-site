import React from "react";
import { Link } from "gatsby";

export default function MainNav() {
  return (
    <div className="m-2 md:m-5">
      <Link to="/">about</Link>
      <Link to="/photography" className="m-5">
        photography
      </Link>
      {/* <Link to="/software">software</Link> */}
    </div>
  );
}
