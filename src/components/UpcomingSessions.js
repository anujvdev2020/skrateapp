import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import {
  skrateLogo,
  signInDesign,
  avatar,
  homeIcon,
  rightArrow,
} from "./assets";

const Sessions = ({ sessions }) => {
  return (
    <>
      <div style={styles.mainContainer}>
        <div>
          <h3>Upcoming Sessions</h3>
        </div>
        {sessions != null && sessions.length
          ? sessions.map((session) => {
              return (
                <div style={styles.sessionContainer}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={avatar} style={styles.avatar} />
                    <div>
                      <p>{session?.mentor_name}</p>
                      <p>Flutter</p>
                    </div>
                  </div>
                  <div>
                    <p>14.00-15.00</p>
                    <p>22/10/21</p>
                  </div>
                  {session?.session_type == "Mentorship" ? (
                    <div style={styles.mentorship}>
                      <p>{session?.session_type}</p>
                    </div>
                  ) : (
                    <div style={styles.review}>
                      <p>{session?.session_type}</p>
                    </div>
                  )}

                  <div>
                    <img src={rightArrow} />
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};
const styles = {
  avatar: {
    height: "40px",
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
  review: {
    background: "#91AEE1",
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

export default Sessions;
