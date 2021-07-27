import React from 'react';

function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <a class="btn" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                    <a class="btn" href="https://www.facebook.com/marivignesh01/"><i class="fa fa-facebook"></i></a>
                    <a class="btn" href="https://www.linkedin.com/in/marivignesh/"><i class="fa fa-linkedin"></i></a>
                    <a class="btn" href="https://twitter.com/marivigneshr499"><i class="fa fa-twitter"></i></a>
                    <a class="btn" href="https://www.instagram.com/marivignesh499/"><i class="fa fa-instagram"></i></a>
                    <a class="btn" href="http://youtube.com/movies"><i class="fa fa-youtube"></i></a>
                    <a class="btn" href="mailto:smartvignesh499@gmail.com"><i class="fa fa-envelope-o"></i></a>
                </div>
                <div className="row justify-content-center">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;