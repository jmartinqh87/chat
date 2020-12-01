import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KommunicateChat from './chat';
import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>¿Qué incluye el Kit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El Kit incluye lo básico para tu rutina diaria:
            Crema antiedad
            Contorno de ojos
            Desmaquillante
            Loción Tónica
          

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> ¿Cómo funciona la Membresía?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La membresía te permite suscribirte para recibir tus productos cada cierto tiempo a precio preferenciales.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}> ¿Cuáles son los Ingredientes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Utilizamos los mejores ingredientes naturales con los siguientes beneficios:
          </Typography>
        </AccordionDetails>
      </Accordion>

 
    <KommunicateChat/>
  </div>


  );
}