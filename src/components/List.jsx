import { useContext } from 'react'
import { TrackerContext } from '../context/GeneralContext'
import {List as ListExpenses ,ListItem, Divider, Grid ,Button} from '@mui/material'
import {Delete} from '@material-ui/icons'

function List(){
    const {transactions,dispacher} = useContext(TrackerContext)
    return(
        <ListExpenses>
            { transactions.map((transaction)=>(
            <ListItem key={transaction.id}>
                <Grid container spacing={2}>
                    <Grid item xs={4}><Button><Delete onClick={()=>dispacher({type:"deleteTransaction",payload:transaction.id})}/></Button></Grid>
                    <Grid item xs={4}>{transaction.type}</Grid>
                    <Grid item xs={4}>{transaction.value}</Grid>
                </Grid>
            </ListItem>
            ))
}
        </ListExpenses>
    )
}

export default List