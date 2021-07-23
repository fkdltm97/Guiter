import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Styled from 'styled-components';
import img from '../../images/남자.jpg'
import img2 from '../../images/여자.jpg'
import img3 from '../../images/슬기.jpg'
import img4 from '../../images/제니.jpg'
import { flexbox } from '@material-ui/system';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y
} from "swiper"; //*
//style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss"; // *


const KKK = withStyles({
    root: {
       width: 450,
       margin: 30,
       
    },

})(Card)

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
function Mainbody3() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Contain>
        <Labeling>
        인기가이드
        </Labeling>


    <DDD>
                <Swiper
                    className='swiper-container'
                    spaceBetween={5}
                    slidesPerView={3}
                    loop={true}
                    pagination={{ clickable: true }} //*
                    scrollbar={{ draggable: false }} //*
                    autoplay={{ delay: 1000 }}
                    // speed={2000}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log("slide change")}
                >
                   
              
                    <SwiperSlide>
        <KKK sx={{ maxWidth: 345 }} >
            <CardHeader
                // avatar={
                //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //         R
                //     </Avatar>
//                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title="서울의 옛 고울"
                subheader="seri"
                />
            <CardMedia
                sx={{
                    height: 0,
                    paddingTop: '56.25%', // 16:9
                }}
                style={{
                    height: '300px'

                    
                }}
                image={img}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                   여행설명 어쩌구 저쩌구.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                   
                   
                    
                </CardContent>
            </Collapse>
        </KKK>
                        </SwiperSlide>
                    <SwiperSlide>
                <KKK sx={{ maxWidth: 345 }} >
                    <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //         R
                        //     </Avatar>
                        //                }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="서울의 옛 고울"
                        subheader="seri"
                    />
                    <CardMedia
                        sx={{
                            height: 0,
                            paddingTop: '56.25%', // 16:9
                        }}
                        style={{
                            height: '300px'
                        }}
                        image={img2}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            여행설명 어쩌구 저쩌구.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>



                        </CardContent>
                    </Collapse>
                </KKK>
                        </SwiperSlide>
                    <SwiperSlide>
                <KKK sx={{ maxWidth: 345 }} >
                    <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //         R
                        //     </Avatar>
                        //                }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="서울의 옛 고울"
                        subheader="seri"
                    />
                    <CardMedia
                        sx={{
                            height: 0,
                            paddingTop: '56.25%', // 16:9
                        }}
                        style={{
                            height: '300px'
                        }}
                        image={img3}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            여행설명 어쩌구 저쩌구.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>



                        </CardContent>
                    </Collapse>
                </KKK>
                        </SwiperSlide>
                    <SwiperSlide>
                        <KKK sx={{ maxWidth: 345 }} >
                            <CardHeader
                                // avatar={
                                //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                //         R
                                //     </Avatar>
                                //                }
                                // action={
                                //     <IconButton aria-label="settings">
                                //         <MoreVertIcon />
                                //     </IconButton>
                                // }
                                title="서울의 옛 고울"
                                subheader="seri"
                            />
                            <CardMedia
                                sx={{
                                    height: 0,
                                    paddingTop: '56.25%', // 16:9
                                }}
                                style={{
                                    height: '300px'


                                }}
                                image={img}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    여행설명 어쩌구 저쩌구.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>



                                </CardContent>
                            </Collapse>
                        </KKK>
                    </SwiperSlide>
                    <SwiperSlide>
                <KKK sx={{ maxWidth: 345 }} >
                    <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //         R
                        //     </Avatar>
                        //                }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="서울의 옛 고울"
                        subheader="seri"
                    />
                    <CardMedia
                        sx={{
                            height: 0,
                            paddingTop: '56.25%', // 16:9
                        }}
                        style={{
                            height: '300px',
                        }}
                        image={img4}
                        // title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            여행설명 어쩌구 저쩌구.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>



                        </CardContent>
                    </Collapse>
                </KKK>
                        </SwiperSlide>
                    <SwiperSlide>
                <KKK sx={{ maxWidth: 345 }} >
                    <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //         R
                        //     </Avatar>
                        //                }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="서울의 옛 고울"
                        subheader="seri"
                    />
                    <CardMedia
                        sx={{
                            height: 0,
                            paddingTop: '56.25%', // 16:9
                        }}
                        style={{
                            height: '300px',
                        }}
                        image={img4}
                        // title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            여행설명 어쩌구 저쩌구.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>



                        </CardContent>
                    </Collapse>
                </KKK>
                        </SwiperSlide>
                </Swiper>
        </DDD>
                    </Contain>
    );

}

export default Mainbody3

const Contain = Styled.div`
    width: 80%;
    margin: 0 auto;
    `

const DDD = Styled.div`
    display: flex;
`

const Labeling = Styled.p`
    font-size : 20px;
`
