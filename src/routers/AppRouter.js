import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import {
  Login,
  Register,
  Start,
  Home,
  Products,
  Employees,
  Dashboard,
  SetPassword,
  ForgotPassword,
  NotFound,
} from "../pages";
import { listOfPrivateRoutes, listOfPublicRoutes } from "./listOfRoutes";
import PrivateRoute from "./PrivateRoute";

//MAPEAR LAS RUTAS DESDE UN ARRAY

export default function AppRouter() {
  /* const renderRedirectPage = () => {
    if (localStorage.getItem("jwt") === null) {
      return listOfPublicRoutes.login;
    } else return listOfPrivateRoutes.home;
  }; */

  return (
    <Router>
      <Routes>
        <Route exact path={listOfPublicRoutes.login} element={<Login />} />
        <Route
          exact
          path={listOfPrivateRoutes.register}
          element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={listOfPrivateRoutes.start}
          element={
            <PrivateRoute>
              <Start />
            </PrivateRoute>
          }
        />
        <Route
          path={listOfPrivateRoutes.home}
          element={
            <PrivateRoute>
              <Layout>
                <Home />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={listOfPrivateRoutes.products}
          element={
            <PrivateRoute>
              <Layout>
                <Products />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={listOfPrivateRoutes.employees}
          element={
            <PrivateRoute>
              <Layout>
                <Employees />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={listOfPrivateRoutes.dashboard}
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={listOfPublicRoutes.forgotPassword}
          element={<ForgotPassword />}
        />
        <Route
          exact
          path={listOfPrivateRoutes.setPassword}
          element={<SetPassword />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
