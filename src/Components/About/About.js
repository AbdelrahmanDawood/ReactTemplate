import React from 'react';
import {Creative,CreativeDesc,CreativeDescLink,CreativeDir,CreativeInfo,CreativeSpan,CreativeTitle} from './AboutStyle.js';

const About = () => {
    return(
        <Creative>
            <div className="container">
                <CreativeInfo>
                    <CreativeTitle ><CreativeSpan>This is</CreativeSpan> Me</CreativeTitle>
                    <CreativeDir>Creative Director</CreativeDir>
                    <CreativeDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <CreativeDescLink href="#">explicabo</CreativeDescLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </CreativeDesc>
                    <CreativeDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </CreativeDesc>
                </CreativeInfo>
            </div>
        </Creative>
    )
}
export default About;