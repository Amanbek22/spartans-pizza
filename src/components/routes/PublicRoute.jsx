import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PublicRoute({ Component }) {
  const auth = useSelector((state) => state.auth.isAuth )
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/admin');
    }
  }, [auth, navigate]);

  return <Component />;
}

export default PublicRoute;
