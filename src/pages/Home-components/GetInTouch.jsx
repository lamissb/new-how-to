import { 
    Box,
    Grid,
    styled,
    Typography,
  } from '@mui/material'
  import Title from './Title'
  // img
  import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
  import React from 'react'
import {  
    Button,
} from '@mui/material'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'
  
  
  const GetStarted = () => {
  
    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })
  
    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                    marginTop:-20
                }}
                >
                    <Title
                    text={
                        'Discover Your Path with how-to Univesity'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                       SkillSculpt guides you through <br />
                       a self-discovery journey, <br />
                       revealing your ideal learning path <br/>
                       based on your unique preferences.
                    </CustomTypography> 
                </Box>
  
            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6} 
            sx={{
                    order: {xs: 4, sm: 4, md: 3},
                    marginTop:-39
            }}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                    marginTop:150
                }}
                />
            </Grid>   
  
            <Grid item xs={41} sm={10} md={10}  /*texxt eli melouta */
            sx={{
                order: {xs: 4, sm: 4, md: 3},
                marginTop:40,
                marginLeft:40
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                    marginRight:40,
                    marginTop:-15
                }}
                >
                
                <Title
                    text={
                        'Lets start your journey'}
                        textAlign={'center'}
                        
                        

                    />
                    <Paragraph 
                    text={
                       'let’s start your journey with us by taking our \
                       quick personalized quiz to connect you with \
                       the content and services that fit you best!'
                        }
                    maxWidth = {'sm'}
                    mx={0}
                    textAlign={'center'}
                    
                    />
                </Box>
                
                <Button component={Link} 
                   to={'/contact'}
                   variant="contained" 
                   type="submit"
                   size="medium"
                   sx= {{ 
                    order: {xs: 4, sm: 4, md: 3},
                    marginRight:60,
                   fontSize: '0.9rem',
                   textTransform: 'capitalize', 
                   py: 2,
                   px: 4,
                   mt: 3, 
                   mb: 2,
                   borderRadius: 0,
                   backgroundColor: '#14192d',
                   marginLeft:30,
                   "&:hover": {
                   backgroundColor: '#1e2a5a',
                }
            }}
            >
                Take the Quiz
            </Button>
            </Grid>
            
        </Grid>
    )
  }
  
export default GetStarted; 


{/* 

import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Contact us to buy property'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'It is our commitment to ensure a professional and enjoyable \
                new home buying experience for you. \
                If you want to get a home to start living as a family in an \
                area that you love click the button below.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                get in touch
            </Button>
 
        </Stack>
        </Grid>
    )
}

export default GetInTouch;*/} 