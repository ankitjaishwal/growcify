import React from "react";
import axios from "axios";
import ProductList from "./ProductList";

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
  },
  control: {
    padding: theme.spacing(2),
  },
  header: {
    background: "#f2f3f4",
  },
  container: {
    margin: "15px 0 0 140px ",
  },
}));

const ShowCategory = (props) => {
  const classes = useStyles();
  const { list } = props;
  return (
    <Paper className={classes.paper} key={list._id}>
      <p style={{ position: "relative", top: "40%" }}>{list.name}</p>
    </Paper>
  );
};

function CategoryList() {
  const [state, setState] = React.useState([]);

  const getList = () => {
    axios.get("https://api.growcify.com/dev/category/list").then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  };

  React.useEffect(() => {
    getList();
  }, []);
  const classes = useStyles();

  const cList = state.map((list) => {
    return (
      <Grid item sm={3} key={list._id}>
        <ShowCategory list={list} />
      </Grid>
    );
  });

  return (
    <>
      <div className={classes.header}>
        <Typography variant="h3" style={{ padding: "10px" }}>
          List of Categories
        </Typography>
      </div>
      <div className={classes.container}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {state.map((list, index) => (
                <ShowCategory list={list}></ShowCategory>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CategoryList;
