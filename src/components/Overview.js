import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { skrateLogo, signInDesign, avatar, homeIcon } from "./assets";
import Sessions from "./UpcomingSessions";
const Overview = ({ dashboard_stats, job_postings, upcoming_sessions }) => {
    return (
    <>
      <div style={styles.mainContainer}>
        <div>
          <h3>Overview</h3>
        </div>

        <div>
          <div style={styles.rectangleContainer}>
            <div style={styles.innerArea}>
              <p style={styles.heading}>Profile Views</p>
              <p style={styles.count}>{dashboard_stats?.profile_views}</p>
            </div>
            <div style={styles.innerArea}>
              <p style={styles.heading}>Mentorship sessions</p>
              <p style={styles.count}>{dashboard_stats?.mentorship_sessions}</p>
            </div>
          </div>
        </div>
        <div>
          <div style={styles.rectangleContainer}>
            <div style={styles.innerArea}>
              <p style={styles.heading}>Jobs Applied</p>
              <p style={styles.count}>{dashboard_stats?.jobs_applied}</p>
            </div>
            <div style={styles.innerArea}>
              <p style={styles.heading}>Skills verified</p>
              <p style={styles.count}>{dashboard_stats?.skills_verified}</p>
            </div>
          </div>
        </div>
      </div>
      <Sessions sessions={upcoming_sessions}/>
    </>
  );
};
const styles = {
  rectangleContainer: {
    display: "flex",
    justifyContent: "space-between",

    borderRadius: "5px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "36px",
  },
  innerArea: {
    margin: 10,

    width: "340px",
    height: "130px",
    display: "flex",
    background: "#F6F7FF",
    alignItems: "center",
    justifyContent: "space-around",
    border: "none",
  },
  count: {
    fontSize: "34px",
    color: "#4F65F6",
  },
  heading: {
    fontSize: "24px",
  },
  mainContainer: {
    background: "#FFFFFF",
    border: "1px solid #FDFDFD",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: "10px",
    padding: "5px",
  },
};

export default Overview;
