import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import { NOME_EMPRESA } from "../../constants";
import { Avatar, Divider, Menu, MenuItem, Stack } from "@mui/material";

import logo from "./assets/logo.png";
import BuildIcon from "@mui/icons-material/Build";

const Header = () => {
  const [cadastroOpen, setCadastroOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);

  const clickCadastro = (event) => {
    setAnchor(event.currentTarget);
    setCadastroOpen(true);
  };

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    if (token == 0) {
      setAdmin(true);
    }
  }, []);

  const fechaMenu = () => {
    setAnchor(null);
    setCadastroOpen(false);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="logo" src={logo} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 10,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {NOME_EMPRESA}
          </Typography>

          <Box
            sx={{ flexGrow: 1, gap: 2, display: { xs: "none", md: "flex" } }}
          >
            <Button
              component={Link}
              to="/dashboard"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Dashboard
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Pedidos
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={clickCadastro}
            >
              Cadastros
            </Button>
            <Button
              component={Link}
              to="/kanban"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Kanban
            </Button>
          </Box>
          {admin ? (
            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Button
                sx={{ my: 2, color: "white" }}
                startIcon={<BuildIcon />}
                component={Link}
                to="/admin"
              >
                Configurações
              </Button>
            </Box>
          ) : (<Box sx={{flexGrow: 0, display: "flex"}}><Typography>Usuário: SUPERVISOR</Typography></Box>)}
        </Toolbar>
        <Menu
          id="menuCadastro"
          anchorEl={anchor}
          open={cadastroOpen}
          onClose={fechaMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem component={Link} to="/colaboradores">
            Colaboradores
          </MenuItem>
          <MenuItem>Empresas terceiras</MenuItem>
          <MenuItem>Produtos</MenuItem>
          <MenuItem>Postos de trabalho</MenuItem>
          <MenuItem>Fluxos de processo</MenuItem>
        </Menu>
      </Container>
    </AppBar>
  );
};
export default Header;
