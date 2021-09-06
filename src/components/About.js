import React from 'react'
import { Card, CardGroup,Accordion } from 'react-bootstrap'
import "../styles/membership.css"
import "../styles/about.css";
function About() {
    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src="https://www.fitnessfirst.net.in/sites/default/files/comman/gx-stretching-31.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>About US</Card.Title>

                </Card.ImgOverlay>
            </Card>
           
            <section class="section" id="section_id_7">
                <div class="section-inner">
                    <h2>Our Story</h2>

                   <p>In 1993, the first Fitness First club opened in Bournemouth in the South Of England. Over the next decade and a half, Fitness first was present in over 16 countries, including India making it a leader in the global fitness industry. In 2018, Fitness First India was acquired by cure.fit, India's largest chain of fitness centres that offers energetic group workouts and multiple workout formats to choose from.</p>
                </div>
              


            </section>

            <section class="section  " id="section_id_8">
                <div class="section-inner">
                    <h2>Who we are</h2>

                    <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlQQkBJ3paTELyVqlIr4_4smPhM2vv7qGeA&usqp=CAU" />
    <Card.Body>
      <Card.Title className="title">Abhinash Sharma</Card.Title>
      <Card.Text>
       Trainer
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KEIc2t-bbzmEOd_UFWhTstO-kavAuru8yLtXpO0pFAv0CmU0-bGxScK-_fojw04zG-k&usqp=CAU" />
    <Card.Body>
      <Card.Title className="title">Steve Joseph</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTfIQ_Zdougk9BBqsJHcIMfig-Iryy9sZIg&usqp=CAU" />
    <Card.Body>
      <Card.Title className="title">Danial</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>
                </div>
            </section>

            
        </>
    )
}

export default About
