import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CountdownTimer from "../../components/Countdown/CountdownTimer"
import "./noungenderquiz.css"


const NounGenderQuiz = () => {

    const [selectedGender, setSelectedGender] = useState(0);

    const selectGender = genderSelected => {
         setSelectedGender(genderSelected);
         let genderChoice = genderSelected.target.value;
         console.log(genderChoice)
    }

    const spanishNoun = "Sombrero";
    const spanishNounGender = "el";
    const spanishNounEnglish = '"hat"';
    const score = "Score 8/10"

    return (
        <Container>
        <div className="quiz-wrapper">
        <h5 className="toptext text-center">Choose the Gender:</h5>
        <Row className="buttonRow">
        <Button variant="success" as="button" value="el" className="choiceButton" onClick={selectGender}>el</Button>
        <Button variant="success" as="button" value="la" className="choiceButton" onClick={selectGender}>la</Button>
        </Row>
        <Row className="nounRow">
            <Button variant="outline-secondary" as="button" className="nounRow">{spanishNoun}</Button>
        </Row>
        <Row className="englishRow">
            <h1>{spanishNounEnglish}</h1>
        </Row>
        <Row className="scoreRow">
            <h1>{score}</h1>
        </Row>
        <Row>
        <CountdownTimer/>
        </Row>
        </div>
        </Container>
    )
}


export default NounGenderQuiz;