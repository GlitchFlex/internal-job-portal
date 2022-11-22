import { Grid, Typography } from "@material-ui/core";
import WelcomeImg from '../assets/welcomeImg.webp';
const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "88vh" }}
    >
      <Grid item>
        <div style = {{display : "flex", justifyContent : "space-evenly", alignItems : "center", width : "74vw"}}>
            <div style = {{width : "50%"}}>
              <h1 style = {{fontSize : "40px", fontWeight : "700", lineHeight : "15px"}}>Welcome to</h1>
              <h1 style = {{fontSize : "40px", fontWeight : "700", }}>Jobs First Search</h1>
              {/* <h1 style = {{fontSize : "40px", fontWeight : "700"}}>First</h1> */}
              {/* <h1 style = {{fontSize : "40px", fontWeight : "700"}}>Search</h1> */}
            </div>
            <div style = {{width : "50%"}}>
              <img style = {{width : "100%"}} src={WelcomeImg} alt="sorry" />
            </div>
        </div>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
