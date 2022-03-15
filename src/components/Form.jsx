import { useContext } from "react";
import { TrackerContext } from "../context/GeneralContext";
import List from './List'
import { Grid,FormControl,InputLabel,TextField,Select,MenuItem,Button, Divider } from "@mui/material";

function Form(){
    const {formData,setFormData,dispacher} = useContext(TrackerContext)
    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e)=> setFormData(prev => ({...prev,type:e.target.value}))}>
                        <MenuItem value="INCOMES">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl >
                    <TextField type="number" variant="outlined" value={formData.value} onChange={(e)=> setFormData(prev => ({...prev,value:e.target.value}))}/>
                </FormControl>
            </Grid>
            <Grid item xs={12}/>
            <Grid item xs={12}>
            <Button onClick={()=>dispacher({type:"addTransaction",payload:formData})}>Add Expense</Button>
            </Grid>
            <Grid item xs={12}>
            <List/>
            </Grid>
        </Grid>
    )
}

export default Form