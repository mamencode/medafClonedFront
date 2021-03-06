import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderScreen from "./screens/HeaderScreen";
import HomeScreen from "./screens/HomeScreen";
import HomeScreenGrid from "./screens/HomeScreenGrid";
import ModelCateScreen from "./screens/ModelCateScreen";
import Uploader from "./components/Uploader";
import MockScreen from "./screens/MockScreen";
import SigninScreen from "./screens/SigninScreen";
import OrderPrint from "./screens/OrderPrint";
import PlaceOscreen from "./screens/PlaceOScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";
import OrderListScreen from "./screens/OrderListScreen";
import OrderEditScreen from "./screens/OrderEditScreen";
import AdminRoute from "./screens/AdminRoute";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import DesignCateScreen from "./screens/DesignCateScreen";

import DesignModelScreen from "./screens/DesignModelScreen";
import DesignScreenTwo from "./screens/DesignScreenTwo";
import ModelDesignScreen from "./screens/ModelDesignScreen";
import DesignMockScreen from "./screens/DesignMockScreen";
import PlaceOrderDesign from "./screens/PlaceOrderDesign";
import DisignListScreens from "./screens/DesignListScreens";

import DesignEdit from "./screens/DesignEdit";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <HeaderScreen />
      <div className="App">
        <Helmet>
        <title>Medaf Customize Phone Cases</title>
          <meta name="description" content="The Trendiest Designs customized   Cell Phone Cases Smartphone Cases, Tablet Covers, Laptop Sleeves & More ✓ Trusted Shop ✓ Fast Delivery ✓ Worldwide Delivery Ethiopia" />
          <meta itemProp="name" content="Medaf Customize Phone Cases"  />
          <meta itemProp="description" content="The Trendiest Designs customized   Cell Phone Cases Smartphone Cases, Tablet Covers, Laptop Sleeves & More ✓ Trusted Shop ✓ Fast Delivery ✓ Worldwide Delivery Ethiopia" />
          <meta itemProp="image" content="https://i.imgur.com/0HycHMZ.jpg" />
          <meta property="og:url" content="https://medaffrontend.web.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Medaf Customize Phone Cases" />
          <meta property="og:description" content="The Trendiest Designs customized   Cell Phone Cases Smartphone Cases, Tablet Covers, Laptop Sleeves & More ✓ Trusted Shop ✓ Fast Delivery ✓ Worldwide Delivery Ethiopia" />
          <meta property="og:image" content="https://i.imgur.com/0HycHMZ.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Medaf Customize Phone Cases"/>
          <meta name="twitter:description" content="The Trendiest Designs customized   Cell Phone Cases Smartphone Cases, Tablet Covers, Laptop Sleeves & More ✓ Trusted Shop ✓ Fast Delivery ✓ Worldwide Delivery Ethiopia" />
          <meta name="twitter:image" content="https://i.imgur.com/0HycHMZ.jpg"/>

        </Helmet>
        <Switch>
          <AdminRoute path="/order/:id/edit">
            <OrderEditScreen />
          </AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/design/:id/edit">
            {/* <DesignEditScreens /> */}
            <DesignEdit />
          </AdminRoute>

          <AdminRoute
            path="/designlist"
            component={DisignListScreens}
            exact
          ></AdminRoute>
          <AdminRoute path="/user/:id/edit">
            <UserEditScreen />
          </AdminRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/userlist"
            component={UserListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></AdminRoute>
          <Route path="/orderhistory">
            <OrderHistoryScreen />
          </Route>
          <Route path="/order/:id">
            <OrderPrint />
          </Route>
          <Route exact={true} path="/placeorder">
            <PlaceOscreen />
          </Route>
          <Route path="/signin">
            <SigninScreen />
          </Route>
          <Route exact={true} path="/mockup/:id">
            <MockScreen />
          </Route>
          <Route exact={true} path="/upload/:id">
            <Uploader />
          </Route>

          <Route exact={true} path="/brand/:brand">
            <ModelCateScreen />
          </Route>
          <Route exact={true} path="/placeorderdesign">
            <PlaceOrderDesign />
          </Route>
          <Route path="/design/category">
            <DesignScreenTwo />
          </Route>
          <Route path="/design/mockup/:id">
            <DesignMockScreen />
          </Route>
          <Route path="/brand/design/:brand">
            <ModelDesignScreen />
          </Route>
          <Route path="/design/:id">
            <DesignModelScreen />
          </Route>
          <Route path="/designs">
            <DesignCateScreen />
          </Route>

          <Route path="/">
            <HomeScreen />
            <HomeScreenGrid />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
