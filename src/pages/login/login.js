import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { loginService } from "../../services/loginServices";


const Login = () => {

    const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(e);

    const item = {
      user: e.target.user.value,
      password: e.target.user.password,
    };
    const response = await loginService(item);
    localStorage.setItem("token", response.data.nivel)
    localStorage.setItem("username", response.data.name)
    navigate("/dashboard")
    };
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          marginTop: 8,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Bihands Kanban
        </Typography>
        <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="Usuário"
            name="user"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Typography>Esqueci a senha</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
