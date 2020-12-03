import React from 'react';
import { useHistory } from 'react-router-dom';


const NoPageFound = () => {

    const history = useHistory();

    const navigateToHome = () => {
        history.push('/home');
    }
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>


                            </div>

                            <div class="contant_box_404">
                                <h3 class="h2">
                                    Look like you're lost
		</h3>

                                <p>the page you are looking for not avaible!</p>

                                <a onClick={navigateToHome} class="link_404" style={{ backgroundColor: '#242424' }}>Go to Home Page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NoPageFound;