import { Container , makeStyles , Typography } from "@material-ui/core";
import Carousel from "./Carsoual";

const useStyles = makeStyles((theme)=>({
    banner :{
        backgroundImage : "url(./banner2.jpg)"
    },
    bannerContent : {
        height : 400 ,
        display : "flex",
        flexDirection : "column",
        paddingTop : 25 ,
        justifyContent : "space-around",
    },
    tagline : {
        display : "flex",
        height : "40%",
        justifyContent : "center",
        flexDirection : "column",
        textAlign : "center",
    },
    carousel : {
        height : "50%",
        display : "flex",
        alignItems : "center",
    },
}));

function Banner(){
    const classes = useStyles()

    return(
        <div className= {classes.banner}>
          <Container className= {classes.bannerContent}>
           <div className= {classes.tagline}>
              <Typography
              variant="h2"
              style={{
                fontWeight : "bold",
                fontFamily : "Montserrat",
                marginBottom : 15 ,
              }}
              >
                Crypto Tracker
              </Typography>

              <Typography
              variant="subtitle2"
             style={{
             fontFamily : "Montserrat",
             color : "darkgrey",
             textTransform : "capitalize",
             }}
              >
                Get All The Info Regarding your Favorite Crypto Currency 
              </Typography>
           </div>
           <Carousel/>
          </Container>
        </div>
    )
}
export default Banner ;