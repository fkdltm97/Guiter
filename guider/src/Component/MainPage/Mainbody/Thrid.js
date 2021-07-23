import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ThridButton from './ThirdButton';

const useStyles = makeStyles((theme) => ({
    root: {
        // margin: theme.spacing(1),
        // color : "white"
        // '& > *': {
        // },
    },
}));


function Thrid() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    
    return (
        <Third>
            <A1 href="#">호스트 가입하기</A1>
            {/* <FormatLineSpacingIcon fontSize="large"/> */}
            <div className={classes.root}>
                <Button color="secondary">랜선여행</Button>
            </div>
            {/* <Button1><FormatLineSpacingIcon fontSize="small" /><AccountCircleIcon fontSize="small" /></Button1> */}
            {/* <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <Button1><FormatLineSpacingIcon fontSize="small" /><AccountCircleIcon fontSize="small" /></Button1>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div> */}
            <ThridButton/>
        </Third>
    )
}

export default Thrid


const Third = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 400px;
`
const A1 = styled.a`
text-decoration : none;
color: white;
`