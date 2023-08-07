// App.js
import React from "react";
import HomeComponents from "../components/Home";
import PageNotFound from "../components/PageNotFound";

const Home = () => {

   const token = localStorage.getItem("token");

   if (!token) {
     return (
       <>
         <PageNotFound />;
       </>
     );
   }
  return (
    <>
      <HomeComponents />
    </>
  );
};

export default Home;
