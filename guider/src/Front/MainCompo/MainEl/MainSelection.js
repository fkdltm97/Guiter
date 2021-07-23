import React from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
function MainSelection() {
    return (
        <Container>
        <DatePicker noValidate>
            <TextField
                id="datetime-local"
                label="출발 날짜"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 350 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </DatePicker>
       
       <DatePicker noValidate>
            <TextField
                id="datetime-local"
                label="복귀 날짜"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 350 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </DatePicker>
        </Container>
    )
}

export default MainSelection

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const DatePicker = styled.form`
    margin: 10px;
`