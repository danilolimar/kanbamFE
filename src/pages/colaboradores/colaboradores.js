import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

import {
  getColabsService,
  getColabsTypesService,
} from "../../services/colaboradoresServices";

import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoopIcon from "@mui/icons-material/Loop";

import { modalStyle, StyledTableCell, StyledTableRow } from "./styles";

const Colaboradores = () => {
  const [token, setToken] = useState("teste");
  const [colabs, setColabs] = useState();
  const [colabTypes, setColabTypes] = useState();
  const [loading, setLoading] = useState(true);

  const [pin, setPin] = useState("0000");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState({ id: 0, name: 0, tipo: 0 });

  

  const handleOpenModal = (row) => {
    setModalEdit(row);
    setModalOpen(true);
  };

  const createPin = () => {
    const generatedPin = Math.floor(1000 + Math.random() * 9000);
    setPin(generatedPin);
  };

  const handleCloseModal = () => setModalOpen(false);

  const getColaboradores = async () => {
    const response = await getColabsService(token);
    setColabs(response.data);
    setLoading(false);
  };

  const getColabTypes = async () => {
    const response = await getColabsTypesService(token);
    setColabTypes(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalEdit({ ...modalEdit, [name]: value });
  };

  useEffect(() => {
    getColaboradores();
    getColabTypes();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3" sx={{ marginTop: 2, marginBottom: 2 }}>
          Colaboradores
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#e3f2fd" }}
          >
            <Typography>
              <AddCircleIcon sx={{ verticalAlign: "middle", mr: 2 }} />
              Adicionar colaborador
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField label="Nome" size="small" sx={{width: 400}}/>
                <TextField label="CPF" size="small" />
              </Box>
              <Box sx={{display: "flex"}}>
                <TextField
                  label="PIN"
                  sx={{ width: 64 }}
                  size="small"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                <Button
                  startIcon={<LoopIcon size="small" />}
                  onClick={createPin}
                >
                  Gerar PIN
                </Button>
                <FormControl sx={{ minWidth: 200, ml: 8}}>
                  <InputLabel id="posto">Posto de trabalho</InputLabel>
                  <Select
                    size="small"
                    labelId="posto"
                    value="0"
                    label="Posto de trabalho"
                    autoWidth
                  >
                    {!colabTypes && (
                      <MenuItem key="none" value="0">
                        {colabTypes ? "Nenhum" : "Carregando..."}
                      </MenuItem>
                    )}
                    {colabTypes?.map((type, index) => (
                      <MenuItem key={index} value={type.id}>
                        {colabTypes.find((id) => id.id === type.id).name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Button
              size="small"
              sx={{ mr: 10 }}
              startIcon={<AddCircleIcon fontSize="small" />}
            >
              Adicionar
            </Button>
          </AccordionDetails>
        </Accordion>

        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="lista colaboradores"
            size="small"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">Nome</StyledTableCell>
                <StyledTableCell align="left">
                  Posto de trabalho
                </StyledTableCell>
                <StyledTableCell align="right">Editar/Apagar</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {!loading ? (
                <>
                  {colabs.map((row) => (
                    <StyledTableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.name}</StyledTableCell>
                      <StyledTableCell align="left">
                        {colabTypes.find((id) => id.id === row.colabType).name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          onClick={() => handleOpenModal(row)}
                          size="small"
                          startIcon={<EditIcon fontSize="small" />}
                        >
                          Editar
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </>
              ) : (
                <>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="rectangular" />
                    </TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Editando Colaborador
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
                defaultValue={modalEdit.name}
                InputProps={{
                  readOnly: true,
                }}
                size="small"
                fullWidth
                sx={{ mr: 10 }}
              />
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">
                  Posto de trabalho
                </InputLabel>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  value={modalEdit.tipo ? modalEdit.tipo : "0"}
                  name="tipo"
                  label="Posto de trabalho"
                  onChange={(e) => handleChange(e)}
                >
                  {colabTypes?.map((type, index) => (
                    <MenuItem key={index} value={type.id}>
                      {colabTypes.find((id) => id.id === type.id).name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{ mt: 2, justifyContent: "space-between", display: "flex" }}
            >
              {/* <TextField label="PIN" size="small" sx={{ width: 64 }}/><Button
                  startIcon={<LoopIcon size="small" />}
                  onClick={createPin}
                >
                  Gerar PIN
                </Button> */}
              <Button startIcon={<PersonOutlineOutlinedIcon />}>
                Informações
              </Button>

              <Button startIcon={<SaveIcon />}>Salvar</Button>
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

export default Colaboradores;

//
