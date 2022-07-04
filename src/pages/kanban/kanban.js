import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";

import Header from "../../components/Header/Header";
import KanbanCard from "./kanbanCard";

import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import ProcessoPaper from "./processoPaper";

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
      processo_atual: 1,
      processo_final: 10,
    },
    {
      id: 3,
      colaborador: "Beltrano",
      processo_atual: 1,
      processo_final: 10,
    },
  ]);

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(
      update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      })
    );
  };
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3" sx={{ marginTop: 2 }}>
          Kanban
        </Typography>

        <Box
          component="div"
          sx={{
            overflowX: "auto",
            display: "flex",
            my: 2,
            p: 1,
            border: "1px solid",
            borderRadius: 2,
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
            </ProcessoPaper>
            <ProcessoPaper processo="Processo 2"></ProcessoPaper>
            <ProcessoPaper processo="Processo 3"></ProcessoPaper>
          </DndProvider>
        </Box>
      </Container>
    </>
  );
};

export default Kanban;
