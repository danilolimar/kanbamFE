import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Colaborador = () => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ justifyContent: "space-between", display: "flex" }}>
          <Typography variant="h3" sx={{ marginTop: 2, marginBottom: 2 }}>
            Informações Colaborador
          </Typography>
          <Box sx={{marginY: "auto"}}>
            <FormControl variant="standard">
              <Input
              autoComplete="off"
                id="search"
                placeholder="Procurar por CPF/ID"
                variant="standard"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>{" "}
          </Box>
        </Box>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h5">Nome Colaborador</Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Colaborador;
