import React, { useContext, useEffect, useState } from "react";
import Feed from "../pages/Feed";
import Inicio from "../pages/Inicio";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [authenticated, setAuthenticated] = useState(isAuthenticated);

  useEffect(() => {
    setAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      {authenticated ? <Feed /> : <Inicio />}
    </>
  );
};

export default Home;
