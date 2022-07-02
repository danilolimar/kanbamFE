import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";

import ReceiptIcon from "@mui/icons-material/Receipt";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PeopleIcon from '@mui/icons-material/People';

import DashCard from "./dashCard";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3" sx={{ marginTop: 2 }}>
          Dashboard
        </Typography>
        <Grid container spacing={2} sx={{ m: 2 }}>
          <Grid item xs={3}>
            <DashCard
              title="Pedidos"
              text="2 pedidos não iniciados"
              buttonText="Gerenciar pedidos"
              icon={<ReceiptIcon fontSize="large" />}
            />
          </Grid>
          <Grid item xs={3}>
            <DashCard
              title="Processando"
              text="4 em processamento"
              buttonText="Ir para Kanban"
              icon={<HourglassEmptyIcon fontSize="large" />}
            />
          </Grid>
          <Grid item xs={3}>
            <DashCard title="Estações" text="3 ociosas" buttonText="Gerenciar colaboradores" icon={<PeopleIcon fontSize="large" />} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
