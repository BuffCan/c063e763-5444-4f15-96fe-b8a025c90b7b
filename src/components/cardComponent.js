import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import { AddCircleOutlined } from '@material-ui/icons';

export default function NoteCard({ card, handleAddCart }) {
  return (
    <div>
        <Card elevation={1}>
          <CardHeader 
            action={
              <IconButton onClick={() => console.log('add', card.title, 'to cart') /* handleAddCart(card.id) */}>
                <AddCircleOutlined/>
              </IconButton>
            }
            title={card.title}
            subheader={card.date}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {card.city}
            </Typography>
          </CardContent>
        </Card>
    </div>
  )
}
