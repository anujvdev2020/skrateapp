import React, { useEffect,useState } from "react";
import { Container, Grid } from "@material-ui/core";
import axios from 'axios'
import {
  skrateLogo,
  signInDesign,
  avatar,
  homeIcon,
  shuffleIcon,
} from "./assets";
import Overview from "./Overview";
import Jobs from "./Jobs";
import './Styles.css'
const Home = () => {
    const [data,setData]=useState({})
    const [jobs,setJobs]=useState([])
    const [sessions,setSessions]=useState([])
    const [loading,setLoading]=useState(true)
    const [overview,setOverview]=useState({})
    useEffect(()=>{
        axios.get('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
        .then((response)=>{
           let data=response?.data
           setData(data)
           setLoading(false)
           setJobs(data?.job_postings)
           setSessions(data?.upcoming_sessions)
           setOverview(data?.dashboard_stats)
        })
    },[])
  return (
    <>
        
      <Grid container>
        {/* header container */}
        <Grid container>
          <Grid item xs={7} sm={7}>
            <img src={skrateLogo} style={styles.skrateLogo} />
          </Grid>
          <Grid item xs={5} sm={5}>
            <div style={styles.headerLeftSection}>
              <div className="signoutBtn">
                <button style={styles.singnOutbtn}>
                  <span style={styles.singnOutbtnText}>Sign Out</span>
                </button>{" "}
              </div>
              <div>
                <img src={avatar} style={styles.avatar} />
              </div>
              <div style={styles.avatarText}>{data?.full_name}</div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={2} xs={12}>
          <div style={{margin:"10px",padding:"5px"}}>
            <img src={homeIcon} />
            <span>Home</span>
          </div>
          <div style={{margin:"10px",padding:"5px"}}>
            <img src={shuffleIcon} />
            <span>Shuffle</span>
          </div>
        </Grid>
        <Grid item sm={5} xs={12}>
          <Overview {...data} />
        </Grid>
        <Grid item sm={5} xs={12}>
          <Jobs jobs={jobs}/>
        </Grid>
      </Grid>
    </>
  );
};
const styles = {
  singnOutbtn: {
    padding: "10px 26px",
    background: "rgb(79, 101, 246)",
    border: "none",
    borderRadius: "5px",
    margin: "5px 10px",
    "@media (min-width: 500px)": {
      display: "none",
    },
  },

  singnOutbtnText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",

    alignItems: "center",
    textAlign: "center",

    color: "#FFFFFF",
  },
  headerLeftSection: {
    display: "flex",
    margin: "20px",
  },
  avatar: {
    margin: "5px 10px",
  },
  avatarText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "24px",
    letterSpacing: "0.01em",
    /* ◇ Light / Dark */

    color: "#263238",
    margin: "15px 10px",
  },
};

export default Home;
