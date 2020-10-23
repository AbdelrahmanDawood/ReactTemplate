import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BoxContent,BoxContentImage,BoxContentOverlay,BoxContentOverlaySpan,Portfolio,PortfolioItem,PortfolioList,PortfolioTitle,PortfolioTitleSpan} from './PotofolioStyle.js';

const Portofolio = () => {

    const [images,setImages]=useState([]);

    useEffect( () => {
        axios.get('js/data.json').then(res=>{setImages(res.data.portofolio)});
    } ,[images]);

    const portofolioImages=images.map(e=>{
        return(
            <BoxContent key={e.id}>
                <BoxContentImage src={e.image} alt="" />
                <BoxContentOverlay>
                    <BoxContentOverlaySpan>
                        Show Image
                    </BoxContentOverlaySpan>
                </BoxContentOverlay>
            </BoxContent>
        );
    })
    return(
        <Portfolio>
            <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem >HTML</PortfolioItem>
                <PortfolioItem >Photoshop</PortfolioItem>
                <PortfolioItem >Wordpress</PortfolioItem>
                <PortfolioItem >Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">                
                {portofolioImages}
            </div>
            
        </Portfolio>
    )
}
export default Portofolio;