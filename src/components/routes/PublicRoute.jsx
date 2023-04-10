import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PublicRoute({ Component, auth }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/admin');
    }
  }, [auth, navigate]);

  return <Component />;
}

export default PublicRoute;
