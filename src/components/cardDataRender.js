import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import NoteCard from "./cardComponent";

export default function Card() {

    const [card, setCard] = useState([])

    useEffect (() => {
        fetch('https://tlv-events-app.herokuapp.com/events/uk/london')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    const handleAddCart = async(id) => {
        await fetch('https://tlv-events-app.herokuapp.com/events/uk/london' + id, {
            method: 'POST'
        })

        const newCard = card.filter(card => card.id !== id)
        setCard(newCard)
    }

    return (
        <Container>
            <Grid container spacing={3}>
                {card.map(card => (
                    <Grid item key={card.id} xs={12} md={6} lg={4}>
                        <NoteCard card={card} handleAddCart={handleAddCart} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


//for sending data to the cart when clicking the add button

// if () {
//     fetch('https://tlv-events-app.herokuapp.com/events/uk/london', {
//         method: 'POST',
//         headers: {"Content-type": "application/json"}
//         body: JSON.stringify({ title, etc... })
//     }).then(() => history.pushState('/'))
// }