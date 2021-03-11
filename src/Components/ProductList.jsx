import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
//import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Dosa from "../images/Dosa.jpg";
import Tshirt from "../images/Tshirt.png";
import Ghee from "../images/Ghee.jpg";
import Maaza from "../images/Maaza.jpg";
import Grocery from "../images/Grocery.jpg";
import Vegetables from "../images/Vegetables.jpg";
import Fruits from "../images/Fruits.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 100,
    margin: 20,
  },
  media: {
    height: 400,
  },
  header: {
    background: "#f2f3f4",
  },
}));

const Display = (list) => {
  const classes = useStyles();
  console.log("List", list);
  return (
    <Card key={list.list._id} className={classes.root}>
      {list.list.category.name === "South Indian" && (
        <CardMedia image={Dosa} component="img" className={classes.media} />
      )}
      {list.list.category.name === "Men's Wear" && (
        <CardMedia image={Tshirt} component="img" className={classes.media} />
      )}
      {list.list.category.name === "Ghee" && (
        <CardMedia image={Ghee} component="img" className={classes.media} />
      )}
      {list.list.category.name === "Beverages" && (
        <CardMedia image={Maaza} component="img" className={classes.media} />
      )}
      {list.list.category.name === "Grocery" && (
        <CardMedia image={Grocery} component="img" className={classes.media} />
      )}
      {list.list.category.name === "Vegetables" && (
        <CardMedia
          image={Vegetables}
          component="img"
          className={classes.media}
        />
      )}
      {list.list.category.name === "Fruits" && (
        <CardMedia image={Fruits} component="img" className={classes.media} />
      )}
      <CardContent>Name : {list.list.name}</CardContent>
      <CardContent>Category : {list.list.category.name}</CardContent>
    </Card>
  );
};

function ProductList(props) {
  const [productList, setProductList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();

  const url = `https://api.growcify.com/dev/product/list/${props.listId}`;

  const getList = () => {
    axios.get(url).then((res) => {
      // console.log(res.data);
      setProductList(res.data);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    getList();
  }, []);

  return !loading ? (
    <>
      <div className={classes.header}>
        <Typography variant="h3" style={{ padding: "10px" }}>
          List of Products
        </Typography>
      </div>
      <Grid justify="center" container>
        <Grid item xs={12}>
          <Grid container>
            {productList.length > 0 ? (
              productList.map((list, index) => (
                <Grid item xs={4}>
                  <Display key={index} list={list} />
                </Grid>
              ))
            ) : (
              <h2 style={{ margin: "auto", padding: "15% 0" }}>
                No Product Available{" "}
              </h2>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  ) : (
    <CircularProgress style={{ margin: "auto", padding: "15% 0" }} />
  );
}

export default ProductList;
