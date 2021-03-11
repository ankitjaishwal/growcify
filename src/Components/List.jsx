import {
  HashRouter,
  Route,
  Redirect,
  withRouter,
  useParams,
} from "react-router-dom";
import CategoryList from "./CategoryList.jsx";
import ProductList from "./ProductList.jsx";

import React from "react";
import axios from "axios";

const CategoryWithId = () => {
  const listInfo = useParams();
  //console.log(listInfo);
  return <ProductList {...listInfo} />;
};

function List() {
  const [state, setState] = React.useState([]);

  const getList = () => {
    axios.get("https://api.growcify.com/dev/category/list").then((res) => {
      //console.log(res.data);
      setState(res.data);
    });
  };

  React.useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <HashRouter>
        <Route path="/product/:listId" exact>
          <CategoryWithId />
        </Route>
        <Route exact path="/">
          <CategoryList state={state} />
        </Route>
        <Redirect to="/" />
      </HashRouter>
    </div>
  );
}

export default withRouter(List);
