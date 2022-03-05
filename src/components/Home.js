/** @format */

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actionCreator";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  if (data.results) {
    // set data into local storage of the browser
    localStorage.setItem("data", JSON.stringify(data.results));
  }

  useEffect(() => {
    console.log("Use Effect");
    dispatch(fetchData());

    return () => localStorage.clear();
  }, []);

  return (
    <div>
      {data.results
        ? data.results.map((item, index) => (
            <Fragment key={index}>
              <div>
                <h3 style={{ display: "inline-block", paddingRight: "5px" }}>
                  Name:{" "}
                </h3>
                <span>
                  {item.name.title} {item.name.first} {item.name.last}
                </span>
              </div>
              <div>
                <h3 style={{ display: "inline-block", paddingRight: "5px" }}>
                  Email:{" "}
                </h3>
                <span>{item.email}</span>
              </div>
            </Fragment>
          ))
        : "Loading"}
      <button
        onClick={() => dispatch(fetchData())}
        style={{
          padding: "7px",
          backgroundColor: "crimson",
          color: "white",
          borderRadius: "5px",
          border: "0px",
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default Home;
