import { useContext,useEffect } from 'react'
import {TrackerContext} from '../context/GeneralContext'
import {Box,Card,CardHeader,CardContent,Divider} from '@mui/material'
import {useSpeechContext} from '@speechly/react-client'
import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'
import Form from './Form'
import List from './List'
function Tracker(){
    const {setFormData} = useContext(TrackerContext) 
    const {segment} = useSpeechContext()
    
    useEffect(()=>{
        if(segment){
            segment.entities.forEach((element)=>{
                if(element.type === "amount"){
                    setFormData(prev => ({...prev,value:element.value}))
                }else{
                    setFormData(prev => ({...prev,type:element.value}))
                }
            })
        }
    },[segment])

    return(
        <Box>
            <Card>
                <CardHeader title="Tracker" subheader="By Me"/>
                <Divider></Divider>
                <CardContent>
                    <Form/>
                </CardContent>
            </Card>
            <Box>
                <PushToTalkButtonContainer>
                    <PushToTalkButton/>
                    <ErrorPanel/>
                </PushToTalkButtonContainer>
            </Box>
        </Box>
    )
}

export default Tracker