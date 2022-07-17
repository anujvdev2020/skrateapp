import React from "react";
import { Container, Grid } from "@material-ui/core";
import { skrateLogo, signInDesign } from "./assets";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const SignIn = () => {
  const navigate = useNavigate();
  const { singInWithGoogle, user } = useUserAuth();
  const handleClick = async () => {
    try {
      const res = await singInWithGoogle();

      if (res) {
        navigate("/home");
      }
    } catch (e) {
      console.log("Err", e);
    }
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <div style={styles.header}>
          <img src={skrateLogo} style={styles.skrateLogo} />
          <img src={signInDesign} />
        </div>
      </Grid>
      <Grid item xs={12} sm={12}>
        <div>
          <h2 style={styles.welcomeText}>Welcome Back to Skrate!!</h2>
        </div>
      </Grid>

      <Grid container spacing={3}>
        <Grid item></Grid>
        <Grid item xs={11} sm={11}>
          <button style={styles.signInbtn} onClick={handleClick}>
            <span style={styles.signInText}>Sign In With Google</span>
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  skrateLogo: {
    width: "158px",
    height: "147px",
    left: "-14px",
    top: "-21px",
  },
  welcomeText: {
    height: "34px",
    width: "203px",
    left: "43px",
    top: "412px",
    borderRadius: " nullpx",

    fontFamily: "Poppins",
    fontSize: "22px",
    fontWeight: "500",
    lineHeight: "33px",
    letterSpacing: "0em",
    textAlign: "left",
    marginLeft: "30px",
  },
  signInbtn: {
    height: "46px",
    width: "377px",
    background: "#4F65F6",
    border: "none",
    borderRadius: "5px",
    margin: "25px 15px",
    cursor: "pointer",
  },
  signInText: {
    position: "relative",
    width: "235px",
    height: "36px",

    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "36px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    left: "80px",

    color: "#FFFFFF",
  },
};
export default SignIn;
