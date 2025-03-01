import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';

const Dashboard = () => {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/trades')
            .then(res => setTrades(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <Container>
            <Typography variant="h4">Trading Journal</Typography>
            {trades.map((trade, index) => (
                <Typography key={index}>
                    {trade.pair} | Profit: {trade.profit_loss}
                </Typography>
            ))}
            <Button variant="contained">Add Trade</Button>
        </Container>
    );
};

export default Dashboard;
