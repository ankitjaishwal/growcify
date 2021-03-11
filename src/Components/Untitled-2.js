import React from "react";
import axios from "axios";

import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}));

const Display = (list) => {
  const classes = useStyles();
  console.log("List", list);
  return (
    <Card key={list.list._id} className={classes.root}>
      <CardBody>
        {list.list.photos.map((img, index) =>
          img !== null ? <CardTitle>{img}</CardTitle> : ""
        )}
        <CardTitle>{list.list.name}</CardTitle>
      </CardBody>
    </Card>
  );
};

function ProductList(props) {
  const [productList, setProductList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const url = `https://api.growcify.com/dev/product/list/${props.listId}`;

  const getList = () => {
    axios.get(url).then((res) => {
      //console.log(res.data);
      setProductList(res.data);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    getList();
  }, []);

  return !loading ? (
    productList.length > 0 ? (
      productList.map((list, index) => <Display key={index} list={list} />)
    ) : (
      <h2>No Data Available </h2>
    )
  ) : (
    <CircularProgress />
  );
}

export default ProductList;
