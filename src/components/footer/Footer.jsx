import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
      <>
          <section className="footer">
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                  Asperiores quis veritatis,
                  neque rem aliquam reprehenderit<br/>
                  dignissimos magni rerum porro ullam
                  a delectus accusamus fuga consectetur
                  deserunt eos sit voluptatem beatae.
              </p>
              <div className="icons">
                    <FacebookIcon style={{margin:"0 10px"}}  />
                    <TwitterIcon style={{margin:"0 10px"}} />
                    <InstagramIcon  style={{margin:"0 10px"}}  />
                    <LinkedInIcon  style={{margin:"0 10px"}} />
              </div>
              

          </section>
      
      </>
  )
}

export default Footer