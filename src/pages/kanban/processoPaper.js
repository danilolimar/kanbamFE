import { Paper, Typography } from "@mui/material";
import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const ProcessoPaper = ({ processo, children }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: ItemTypes.CARD,
    drop: () => ({ name: processo }),
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "#fff";
  if (isActive) {
    backgroundColor = "#ccc";
  } else if (canDrop) {
    //backgroundColor = "darkkhaki";
  }
  return (
    <Paper
      ref={drop}
      role={"Processo"}
      sx={{ minWidth: "300px", py: 2, px: 1, backgroundColor }}
    >
      <Typography variant="h6">{processo}</Typography>
      {children}
    </Paper>
  );
};

export default ProcessoPaper;
