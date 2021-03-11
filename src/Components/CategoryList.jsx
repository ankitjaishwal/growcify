import React from "react";

import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 120,
    width: 150,
    cursor: "pointer",
    margin: 20,
    background: "#f2f3f4",
  },
  control: {
    padding: theme.spacing(2),
  },
  header: {
    background: "#f2f3f4",
  },
  container: {
    margin: "25px auto auto 100px",
  },
}));

const ShowCategory = (props) => {
  const classes = useStyles();
  const { list } = props;
  return (
    <Link style={{ textDecoration: "none" }} to={`/product/${list._id}`}>
      <Paper className={classes.paper} key={list._id}>
        <p style={{ position: "relative", top: "40%", fontWeight: "bold" }}>
          {list.name}
        </p>
      </Paper>
    </Link>
  );
};

function CategoryList(props) {
  const { state } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <Typography variant="h3" style={{ padding: "10px" }}>
          List of Categories
        </Typography>
      </div>

      <div className={classes.container}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container>
              {state.map((list, index) => (
                <Grid item xs={3}>
                  <ShowCategory list={list}></ShowCategory>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CategoryList;
