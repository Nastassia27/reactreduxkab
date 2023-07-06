import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";



function App() {

    let [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(true)
    let [onSwitch, setOnSwitch]=useState<boolean>(true)
    //debugger
    return (

        <div className={'App'}>

            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>*/}
            {/*<Accordion titleValue = {"Menu"} onChange = {setAccordionCollapsed} value={accordionCollapsed} onClick={}/>*/}
            <UncontrolledAccordion titleValue={'False'}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating />


            {/*<OnOff onClick={setOnSwitch} value={onSwitch}/>*/}
            <UncontrolledOnOff onChange={setOnSwitch}/> {onSwitch.toString()}




        </div>
    );
}

type PageTitlePropsType={
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
