
import React,{ useEffect, useState} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Jumbotron,Container,Carousel,CarouselItem,CarouselControl} from 'reactstrap'


function Slider(){
    const [animating,setAnimating] = useState(false);
    const [activeIndex,setActiveIndex] = useState(0); 
    
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === 3 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
       if (animating) return;
       const nextIndex = activeIndex === 0 ? 4 - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    useEffect(()=>{
        let interval=null;
        if(!animating){
            interval=setInterval(()=>{setActiveIndex(activeIndex=>activeIndex!==3 ?activeIndex+1:0)},3000);
        }else if(animating){
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[animating,activeIndex])


        return(
            <div className="d-flex">
                <button onClick={next}>next</button>
                <Carousel activeIndex={activeIndex}>
                    <CarouselItem onExiting={()=>setAnimating(true)} onExited={()=>setAnimating(false)}>
                        <div className="iframediv">
                            <iframe src="https://www.youtube.com/embed/H0tiy4konIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> 
                    </CarouselItem>
                    <CarouselItem onExiting={()=>setAnimating(true)} onExited={()=>setAnimating(false)}>
                        <div className="iframediv">
                            <iframe  src="https://www.youtube.com/embed/FqAjVAf5fNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </CarouselItem>
                    <CarouselItem onExiting={()=>setAnimating(true)} onExited={()=>setAnimating(false)}>
                        <div className="iframediv">
                            <iframe src="https://www.youtube.com/embed/6ZfuNTqbHE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </CarouselItem>
                    <CarouselItem onExiting={()=>setAnimating(true)} onExited={()=>setAnimating(false)}>
                        <div className="iframediv">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/odM92ap8_c0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </CarouselItem>
                    {/* <CarouselItem>
                        <div className="iframediv">
                            <iframe  src="https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLMumsWXNf2nurY-NeitPIumiRSFa9alDo" allowfullscreen></iframe>
                        </div>
                    </CarouselItem> */}
                </Carousel>
                
                <button onClick={previous}>prev</button>
            </div>
        );
    
}

function Jumbo(){
    return(
        <Jumbotron> 
            <Container>
                <div className="row">
                    <img className="d-none d-sm-block  col-12 col-sm-6" src="images/header-image.png" height="270" alt="Fun with movies" />
                    <div className="col-12 col-sm-6 align-items-center">
                        <h2>Find Right Movies Of Your Taste</h2>
                        <p>Don't Waste Your Precious and valuable time watching movies that does not suits you. Choose the right movies here and enjoy Your Movie time.</p>
                        <div class="row">
                            <Slider></Slider>
                        </div>  
                    </div>
                </div>
            </Container>
        </Jumbotron>
    );
}

function Home(){
    return(
        <>
        <Jumbo></Jumbo>
        <div className="container">
            <div>
                <h3>Trending Genres</h3>
                <hr></hr>
                <ul className="trendinggenre">
                    <li>Action</li>
                    <li>Adventure</li>
                    <li>Crime</li>
                    <li>Thriller</li>
                </ul>
            </div>
            <h3>Trending Movies</h3>
            <hr></hr>
            <div className="col-12">
                <div className="col-12 d-flex flex-wrap">    
                    <Card>
                        <CardImg top width="100%" src="images/avengers.jpg"  alt="avengers-image" />
                        <CardBody>
                            <CardTitle tag="h5">Avengers Endgame</CardTitle>
                            <CardText className="card-text"><strong>Genre:</strong> Action/Scifi<br></br> 
                                <a href="#">View more</a><br></br>
                                <span className="rating">4.5/5</span>
                            </CardText>
                        </CardBody>
                    </Card>
        
                    <Card>
                        <CardImg src="images/f&f.jpg" top width="100%" alt="avengers-image"/>
                        <CardBody>
                            <CardTitle tag="h5"><strong>Fast and Furious</strong> </CardTitle>
                            <CardText className="card-text"><strong>Genre:</strong> Action/Thriller<br></br> 
                                <a href="#">View more</a><br></br>
                                <span className="rating">4.8/5</span>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card> 
                        <CardImg top width="100%" src="https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" />
                        <CardBody>
                            <CardTitle tag="h5"><strong>Black Widow</strong></CardTitle>
                            <CardText className="card-text"> <strong>Genre:</strong> Action,Adventure,Sci-Fi <br></br>
                                <a href="#">View more </a> <br></br>
                                <span className="rating">7/10</span> </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardImg top width="100%" src="https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg" />
                        <CardBody>
                            <CardTitle tag="h5"><strong>F9: The Fast Saga</strong></CardTitle>
                            <CardText className="card-text"> <strong>Genre:</strong> Action,Adventure,Crime, Thriller <br></br>
                                <a href="#">View more </a> <br></br>
                                <span className="rating">5.5/10</span> </CardText>
                        </CardBody>
                    </Card>

                    <Card><CardImg top width="100%" 
                        src="https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"/>
                        <CardBody>
                            <CardTitle tag="h5"><strong>The Tomorrow War</strong></CardTitle>
                            <CardText className="card-text"> <strong>Genre:</strong> Action,Adventure,Drama ,Sci-Fi,Thriller
                                <br></br>
                                <a href="#">View more </a> <br></br>
                                <span className="rating">6.7/10</span> </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        
        <a href="movies.html" className="btn btn-primary mt-5">Go to Movies Section &nbsp;<i className="fa fa-angle-double-right"></i></a>
    </div>
        </>
         
    );
}

export default Home;