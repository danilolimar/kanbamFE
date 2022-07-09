import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";

import Header from "../../components/Header/Header";
import KanbanCard from "./kanbanCard";

import { HTML5Backend } from "react-dnd-html5-backend";
import ProcessoPaper from "./processoPaper";

import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

const Kanban = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      colaborador: "Joao",
      processo_atual: 1,
      processo_final: 10,
    },
    {
      id: 2,
      colaborador: "Fulano",
      processo_atual: 45,
      processo_final: 93,
    },
    {
      id: 3,
      colaborador: "Beltrano",
      processo_atual: 22,
      processo_final: 60,
    },
  ]);

  return (
    <>
      <Header />
      <Container>
        <Box sx={{display:"flex", justifyContent: "space-between"}}>
          <Typography variant="h3" sx={{ marginTop: 2 }}>
            Kanban
          </Typography>
          <Typography sx={{my: "auto"}}>Última atualização: {new Date().toLocaleString('pt-br')}<Button size="small" startIcon={<CachedOutlinedIcon />} />
        </Typography>
          </Box>

        <Box
          component="div"
          sx={{
            overflowX: "auto",
            display: "flex",
            my: 2,
            p: 1,
            //border: "1px solid",
            //borderRadius: 2,
            gap: 2,
          }}
        >
          <DndProvider backend={HTML5Backend}>
            {/* <Paper sx={{ minWidth: "300px", py: 2, px: 1 }}>
              <Typography>Processo 1</Typography>
              <KanbanCard cardInfo={cards[0]} />
            </Paper>
            <Paper sx={{ minWidth: "300px", py: 2, px: 1 }}>
              <Typography>Processo 2</Typography>
            </Paper>
            <Paper sx={{ minWidth: "300px", py: 2, px: 1 }}>
              <Typography>Processo 3</Typography>
            </Paper> */}
            <ProcessoPaper processo="Processo 1">
              <KanbanCard cardInfo={cards[0]} />
              <KanbanCard cardInfo={cards[2]} />
            </ProcessoPaper>
            <ProcessoPaper processo="Processo 2"></ProcessoPaper>
            <ProcessoPaper processo="Processo 3">
              <KanbanCard cardInfo={cards[1]} />
            </ProcessoPaper>
            <ProcessoPaper processo="Processo 4">
              <KanbanCard cardInfo={cards[1]} />
            </ProcessoPaper>
            <ProcessoPaper processo="Processo 5">
              <KanbanCard cardInfo={cards[1]} />
            </ProcessoPaper>
          </DndProvider>
        </Box>
      </Container>
    </>
  );
};

export default Kanban;
