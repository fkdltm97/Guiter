import React from 'react'
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Block } from '@material-ui/icons';

function MainInput() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>숙박</MenuItem>
                    <MenuItem value={20}>랜트</MenuItem>
                    <MenuItem value={30}>이벤트</MenuItem>
                    <MenuItem value={40}>가이드</MenuItem>
                    <MenuItem value={50}>음식점</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default MainInput
