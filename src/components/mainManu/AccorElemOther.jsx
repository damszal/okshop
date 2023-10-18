import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function AccorElemOther({accorElemTitle}) {
  return (
    <Accordion>
        <AccordionSummary
        className='accor-title'
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{background:"rgb(0, 162, 244)"}}
        >
        {accorElemTitle}
        </AccordionSummary>
        <AccordionDetails
        sx={{background:"rgb(255, 211, 130)"}}  
        >
        <ul>
                <li>item#1</li>
                <li>item#2</li>
                <li>item#3</li>
                <li>item#4</li>
            </ul>
        </AccordionDetails>
    </Accordion>

  )
}

export default AccorElemOther