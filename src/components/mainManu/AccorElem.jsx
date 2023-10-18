import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function AccorElem({subItems,accorElemTitle}) {
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
            {subItems.map(user => (
            <li key={user.id}>{user.title}</li>
            ))}
        </ul>
        </AccordionDetails>
    </Accordion>
  )
}

export default AccorElem