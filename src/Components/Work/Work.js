import React,{Component} from 'react';
import axios from "axios";
import {WorkBody,WorkContainer,WorkPart,WorkPartDesc,WorkPartIcon,WorkPartIitle,WorkPartLine,WorkTitle,WorkTitleSpan} from "./WorkStyle.js"
class Work extends Component {
    state={
        works:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>{this.setState({works:res.data.works});});
    }
    render(){
        const {works}=this.state;
        const workList=works.map(e=>{
            return(
                <WorkPart first={e.id} key={e.id}>
                    <WorkPartIcon className={e.icon_name}></WorkPartIcon>
                    <WorkPartIitle>{e.title}</WorkPartIitle>
                    <WorkPartLine />
                    <WorkPartDesc>
                        {e.body}
                    </WorkPartDesc>
                </WorkPart>
            )
        });
        return(
            <WorkBody>
                <WorkContainer>
                    <WorkTitle><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
                    {workList}      
                </WorkContainer>
            </WorkBody>
        )
    }
}
export default Work;