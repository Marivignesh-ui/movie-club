import React, { Component } from 'react';
import {Switch,Route,Link,useLocation, Redirect} from 'react-router-dom';
import Movielist from './MovielistComponent';


function Navlinks(props){
    const location=useLocation().pathname;
    return(
        <>
        <ul className="trendinggenre moviegenre">
            <li id="popular-up" className={location==="/movies"?"link-active1":""}><Link to="/movies">Popular</Link></li>
            <li id="action-up" className={location==="/movies/action"?"link-active1":""}><Link to="/movies/action"  replace>Action</Link></li>
            <li id="crime-up" className={location==="/movies/crime"?"link-active1":""}><Link to="/movies/crime"   replace>Crime</Link></li>
            <li id="comedy-up" className={location==="/movies/comedy"?"link-active1":""}><Link to="/movies/comedy" replace>Comedy</Link></li>
            <li id="drama-up" className={location==="/movies/drama"?"link-active1":""}><Link to="/movies/drama"  replace>Drama</Link></li>
            <li id="thriller-up" className={location==="/movies/thriller"?"link-active1":""}><Link to="/movies/thriller" replace>Thriller</Link></li>                            
            <li id="documentary-up" className={location==="/movies/documentary"?"link-active1":""}><Link to="/movies/documentary" replace>Documentary</Link></li>
            <li id="scifi-up" className={location==="/movies/scifi"?"link-active1":""}><Link to="/movies/scifi"  replace>Scifi</Link></li>
            <li id="horror-up" className={location==="/movies/horror"?"link-active1":""}><Link to="/movies/horror" replace>Horror</Link></li>
            <li id="adventure-up" className={location==="/movies/Linkdventure"?"link-active1":""}><Link to="/movies/Linkdventure" replace>Adventure</Link></li>
            <li id="Animation-up" className={location==="/movies/Linknimation"?"link-active1":""}><Link to="/movies/Linknimation"  replace>Animation</Link></li> 
        </ul>
        </>
    );
}

function Navlinks1(){
    const location=useLocation().pathname;
    return(
        <ul className="list-unstyled">
            <li className={location==="/movies"?"link-active":""}><Link to="/movies" class="btn link-active"  id="popular">Popular</Link></li>
            <li className={location==="/movies/action"?"link-active":""}><Link to="/movies/action" class="btn" id="action">Action</Link></li>
            <li className={location==="/movies/crime"?"link-active":""}><Link to="/movies/crime" class="btn"  id="crime">Crime</Link></li>
            <li className={location==="/movies/comedy"?"link-active":""}><Link to="/movies/comedy" class="btn"  id="comedy">Comedy</Link></li>
            <li className={location==="/movies/drama"?"link-active":""}><Link to="/movies/drama" class="btn"  id="drama">Drama</Link></li>
            <li className={location==="/movies/scifi"?"link-active":""}><Link to="/movies/scifi" class="btn"  id="scifi">Scifi</Link></li>
            <li className={location==="/movies/horror"?"link-active":""}><Link to="/movies/horror" class="btn"  id="horror">Horror</Link></li>
            <li className={location==="/movies/thriller"?"link-active":""}><Link to="/movies/thriller" class="btn"  id="thriller">Thriller</Link></li>
            <li className={location==="/movies/adventure"?"link-active":""}><Link to="/movies/adventure" class="btn"  id="adventure">Adventure</Link></li>
            <li className={location==="/movies/animation"?"link-active":""}><Link to="/movies/animation" class="btn"  id="Animation">Animation</Link></li>
            <li className={location==="/movies/documentary"?"link-active":""}><Link to="/movies/documentary" class="btn"  id="documentary">Documentary</Link></li>
        </ul>
    );
}

class Movie extends Component{
   
    render(){
        return(
            <>
            <header className="jumbotron">
                <div className="row">
                    <div class="col-12 col-sm-6 align-items-center">
                        <h2>Search Your Favourite!</h2>
                        <div className="d-flex mb-2">
                            <input type="text" class="form-control form-search d-inline" id="moviename"
                                placeholder="Movie Title" />
                            <button type="button" class="btn btn-primary btn-search d-inline" onClick="find()"><i
                                    class="fa fa-search"></i></button>
                        </div>
                        <Navlinks />
                    </div>
                    <img class="d-none d-sm-block  col-12 col-sm-6" src="/images/header-image.png" height="270"
                        alt="Fun with movies" />
                </div>
            </header>
            <div className="container">
                <div className="row">
                <div className="d-none d-sm-block col-2 left-tab">
                    <Navlinks1 />
                </div>
                <div class="col-12 col-sm-10">
                    <Switch>
                        <Route path='/movies/:genre' component={({match})=><Movielist genre={match.params.genre}/>} />
                        <Redirect to='/movies/popular' />
                    </Switch>
                </div>
                </div>
            </div>
            </>
        );
    }
}

export default Movie;