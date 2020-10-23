import React from 'react';
import {HomeBody,HomeBtn,HomeDesc,HomeDescSpan,HomeInfo,HomeInformation,HomeTitle} from './HomeStyle.js';

const Home = () => {
    return(
        <HomeBody>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Abdelrahman Dawood</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        I am a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn className="home-btn">Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeBody>
    )
}
export default Home;