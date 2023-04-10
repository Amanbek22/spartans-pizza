import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ Component, auth }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return <Component />;
}

export default PrivateRoute;
