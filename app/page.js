"use client";
import React, { useState } from "react";
import Header from "./header.js";
import Movie_raw from "./movies.js";
import Add_movies from "./add_movies.js";
import Footer from "./footer.js";
import { m_Data } from "./data.js";

const Page = () => {
  const [datas, setDatas] = useState(m_Data);

  const deleteItem = (id) => {
    setDatas((prevData) => prevData.filter((item) => item.id !== id));
  };


  return (
    <>
      <Header />
       {datas.map((item)=>(
        <div key={item.id}>
          <Movie_raw
            props={item}
            onDelete={() => deleteItem(item.id)}
          />
        </div>
      ))}
      <Add_movies />
      <Footer />
    </>
  );
};

export default Page;

