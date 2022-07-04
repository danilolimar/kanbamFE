import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const KanbanCard = ({ cardInfo }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: ItemTypes.CARD,
    item: { name: cardInfo.colaborador },
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <Card ref={drag} sx={{ minWidth: "275", opacity }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Pedido {cardInfo.id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Colaborador {cardInfo.colaborador}
        </Typography>
        <Typography variant="body2">
          Status processo: {cardInfo.processo_atual}/{cardInfo.processo_final}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Informações</Button>
      </CardActions>
    </Card>
  );
};

export default KanbanCard;
