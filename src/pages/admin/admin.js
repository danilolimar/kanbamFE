import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Modal,
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header/Header";

import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { modalStyle } from "./styles";

const Admin = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
          Administração do App
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Configurações gerais
            </Typography>
            <FormControl variant="standard">
              <InputLabel htmlFor="nome-empresa">Nome da empresa</InputLabel>
              <Input
                id="nome-empresa"
                //value={nomeEmpresa}
                //onChange={handleChange}
                aria-describedby="nome-empresa-helper-text"
              />
              <FormHelperText id="nome-empresa-helper-text">
                Ajusta o nome nos relatórios e interface
              </FormHelperText>
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 2 }}>
              <InputLabel htmlFor="nome-empresa">
                Senha de administrador
              </InputLabel>
              <Input
                id="senha"
                type="password"
                //value={nomeEmpresa}
                //onChange={handleChange}
                aria-describedby="senha-helper-text"
              />
              <FormHelperText id="senha-helper-text">
                Senha para acessar este painel
              </FormHelperText>
              <Button sx={{ marginTop: 2 }} startIcon={<SaveIcon />}>
                Salvar
              </Button>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Permissões
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nome</TableCell>
                    <TableCell align="right">Editar Permissões</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Supervisor 1
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => handleOpenModal()}
                        size="small"
                        startIcon={<EditIcon fontSize="small" />}
                      >
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Supervisor 2
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => handleOpenModal()}
                        size="small"
                        startIcon={<EditIcon fontSize="small" />}
                      >
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Editando Supervisor
            </Typography>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                label="Nome"
                //defaultValue={modalEdit.name}
                InputProps={{
                  readOnly: true,
                }}
                size="small"
                fullWidth
                sx={{ mr: 10 }}
              />
            </Box>
            <FormGroup>
            <Typography id="permissoes-title" variant="h6" component="h2" sx={{mt: 2}}>
              Permissões
            </Typography>
            
      <FormControlLabel control={<Checkbox defaultChecked />} label="Exibir Relatórios" />
      <FormControlLabel control={<Checkbox />} label="Criar Pedidos" />
    </FormGroup>
            <Box
              sx={{ mt: 2, justifyContent: "space-between", display: "flex" }}
            >
              <TextField label="Alterar senha" size="small" />
              <Button startIcon={<SaveIcon />}>Salvar</Button>
              <Button startIcon={<DeleteForeverIcon />}>Apagar</Button>
              <Button startIcon={<CloseIcon />} onClick={handleCloseModal}>
                Fechar
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default Admin;
