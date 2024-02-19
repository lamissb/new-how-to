import { 
  Box,
  Grid,
  styled,
  Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';


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
          
          <Grid item xs={12} sm={4} md={6}>
              <img src={imgDetail} alt="" 
              style={{
                  width: '100%',
              }}
              />
          </Grid>

          <Grid item xs={12} sm={4} md={6}
          sx={{
              order: {xs: 4, sm: 4, md: 3}
          }}
          >
              <img src={imgDetail2} alt="" 
              style={{ 
                  width: "100%",
              }}
              />
          </Grid>

          <CustomGridItem item xs={12} sm={8} md={6}
          sx={{
              order: {xs: 3, sm: 3, md: 4}
          }}
          >
              <Box component='article'
              sx={{
                  px: 4,
              }}
              >
                  <Title
                  text={
                      'Learn Your Way'
                      
                  }
                  textAlign={'start'}
                  />
                  <CustomTypography>
                  Flexibility redefined,How-to University <br/>
                  empowers you to learn on your terms, <br/> 
                  offering choices like reading,watching <br/>
                  videos,quizzes, and more.<br/>
                  Your journey , your rules !  
                  </CustomTypography>
              
              </Box>
          </CustomGridItem>
          
      </Grid>
  )
}

export default GetStarted;  
