import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'


const DashCard = (props) => {
    return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Box>
        <Typography variant="h4" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="subtitle1">
          {props.text}
        </Typography></Box><Box>
            {props.icon}
          </Box>
      </Box>
    </CardContent>
    <CardActions>
      <Button size="small">{props.buttonText}</Button>
    </CardActions>
  </Card>
  )
}

export default DashCard