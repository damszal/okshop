import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function AccorElem({subItems,accorElemTitle}) {
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
            {subItems.map(user => (
            <li key={user.id}>{user.title}</li>
            ))}
        </ul>
        </AccordionDetails>
    </Accordion>
  )
}

export default AccorElem