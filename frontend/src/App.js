import "./App.css";
import { useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
import AddProduct from "./component/layout/Header/AddProduct.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
      {isAuthenticated && <AddProduct />}

      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute exact path="/password/update" component={UpdatePassword} />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />
        <Route exact path="/Favorite" component={Cart} />

        <ProtectedRoute isAdmin={true} exact path="/admin/dashboard" component={Dashboard} />

        <ProtectedRoute exact path="/admin/products" isAdmin={true} component={ProductList} />

        <ProtectedRoute exact path="/admin/product" isAdmin={true} component={NewProduct} />
        <ProtectedRoute exact path="/addProduct" component={NewProduct} />

        <ProtectedRoute exact path="/admin/product/:id" isAdmin={true} component={UpdateProduct} />

        <ProtectedRoute exact path="/admin/users" isAdmin={true} component={UsersList} />

        <ProtectedRoute exact path="/admin/user/:id" isAdmin={true} component={UpdateUser} />

        <ProtectedRoute exact path="/admin/reviews" isAdmin={true} component={ProductReviews} />

        <Route
          component={
            window.location.pathname !== "/proc" ? NotFound : null
          }
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
