import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import {
  skrateLogo,
  signInDesign,
  avatar,
  homeIcon,
  rightArrow,
} from "./assets";

const Jobs = ({ jobs }) => {
  let newjobs = jobs ? jobs : [];

  return (
    <>
      <div style={styles.mainContainer}>
        <div>
          <h3>New Jobs</h3>
        </div>
        {newjobs.map((job) => {
          return (
            <div style={styles.sessionContainer}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={avatar} style={styles.avatar} />
                <div>
                  <p>{job?.role}</p>
                  <p>{job?.organization_name}</p>
                </div>
              </div>
              <div>
                <p>14.00-15.00</p>
                <p>{job?.date_posted}</p>
              </div>
              <div style={{color:"green"}}>
                <p>2 Hrs Ago</p>
              </div>
              <div>
                <img src={rightArrow} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
const styles = {
  avatar: {
    height: "60px",
    margin: "5px",
  },
  mainContainer: {
    background: "#FFFFFF",
    border: "1px solid #FDFDFD",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: "10px",
    padding: "5px",
  },
  mentorship: {
    background: "#E8C9D1",
    width: "120px",
    height: "60px",
    borderRadius: "5px",
    border: "none",
    textAlign: "center",
  },
 
  sessionContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

export default Jobs;
