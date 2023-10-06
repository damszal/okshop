import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function AccorElemOther({accorElemTitle}) {
  return (
    <Accordion>
        <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        {accorElemTitle}
        </AccordionSummary>
        <AccordionDetails>
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