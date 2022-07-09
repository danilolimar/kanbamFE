import React, { useContext } from "react";
import { Route, Navigate, Routes as BrowserRouter } from "react-router-dom";
import { Context } from "../context/authContext";
import Admin from "../pages/admin/admin";
import Colaborador from "../pages/colaborador/colaborador";
import Colaboradores from "../pages/colaboradores/colaboradores";
import Dashboard from "../pages/dashboard/dashboard";
import Kanban from "../pages/kanban/kanban";
import Login from "../pages/login/login";

const Routes = () => {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authenticated, loading } = useContext(Context);

    return (
      <Route
        {...rest}
        render={(props) => {
          if (loading) {
            return (
              <div class="col-md-12">
                <div class="box box-primary">
                  <div class="box-header">
                    <h3 class="box-title">Carregando...</h3>
                  </div>
                  <div class="box-body">Aguarde um momento.</div>
                  <div class="overlay">
                    <i class="fa fa-refresh fa-spin"></i>
                  </div>
                </div>
              </div>
            );
          }

          if (authenticated) {
            return <Component {...props} />;
          } else {
            return <Navigate to="/Login" />;
          }
        }}
      />
    );
  };
  return (
    <BrowserRouter>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/colaborador" element={<Colaborador />} />
    </BrowserRouter>
  );
};

export default Routes;
