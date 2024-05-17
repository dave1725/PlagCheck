import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { Container, Button } from "react-bootstrap";
import Header from "../components/header";
import Quill from "../components/quill"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Ds from "../page/index";
import Editor from "quill/core/editor";
import Accordion from "react-bootstrap/Accordion";
import "../page/tool.css"

function Tool() {
    const [input, setInput] = useState("");
    const [compare, setCompare] = useState("");
    var inputText;
    var compareText;
    const [value, setValue] = useState();
    const [common, setCommon] = useState("");
    // Example usage:

    // const doc1 = "Modern businesses increasingly rely on digital marketing techniques to gain visibility and engage with consumers across various platforms. Effective strategies like search engine optimization, social media campaigns, and targeted email outreach are essential for growing customer bases and enhancing brand loyalty."

    // const doc2 = "Contemporary companies are turning to digital advertising methods to increase their market presence and interact with customers through multiple channels. Key tactics include optimizing for search engines, conducting social media promotions, and executing direct email campaigns to expand their audience and build consumer trust.";
    const verify = () => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = input;
        inputText = tempElement.textContent;
        
        const temp = document.createElement('div');
        temp.innerHTML = compare;
        compareText = temp.textContent;
        if (inputText.replace(/\s/g,"") == "") {
            alert("Submitted text cannot be empty");
            return;
        }
        if (compareText.replace(/\s/g,"") == "") {
            alert("Reference text cannot be empty");
            return;
        }
        const result = Ds(inputText, compareText);
        document.getElementById("score").style.display = "block";
        if (result.similarityScore < 20) document.getElementById("score").style.color = "green";
        else document.getElementById("score").style.color = "red";
        setValue(+result.similarityScore.toFixed(2));
        document.getElementById("commonparts").style.display = "block";
        console.log(result.commonParts);
        setCommon(result.commonParts);
    }

    return (
        <Container fluid style={{ padding: '0', margin: '0', background: 'white', height: '100vh' }}>
            <Navbar />
            <Container fluid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '62vh', paddingTop: '2%' }}>
                <Header />
                <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Row>
                        <Col lg={true} style={{ padding: '1%' }}><Quill value={input} setValue={setInput} placeholder={"Submit text"} /></Col>{" "}
                        <Col lg={true} style={{ padding: '1%' }}><Quill value={compare} setValue={setCompare} placeholder={"Reference text"} /></Col>
                    </Row>
                    <Container fluid style={{ padding: '0%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button onClick={verify} style={{ marginTop: '1%' }}>Check</Button>
                        <div id="score" style={{ display: "none" }}>Similarity Score: {value}%</div>
                    </Container>
                    <Container fluid id="commonparts" style={{padding: '2%', display: 'none', marginTop: '1%', background: '#00000017', borderRadius: '1rem', textAlign: 'justify'}}>
                        Common Parts: <br></br> {common}
                    </Container>
                    <hr />
                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Can I compare text in different languages?</Accordion.Header>
                            <Accordion.Body>Unfortunately, currently PlagCheck doesn't support multiple languages. You can compare text in only English.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is a plagiarism checker?</Accordion.Header>
                            <Accordion.Body>A plagiarism checker can identify instances of plagiarism in another text. You can compare two different texts to find if portions of the text have lifted from one another.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Do I need to install this software?</Accordion.Header>
                            <Accordion.Body>No. PlagCheck provides this tool as an online service. In order to use, you need modern browser (like Chrome). Any operating system (like Mac, Windows, and Linux) is suported! So, in order to use the tool you don't need to download anything!</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is the comparison tool processing flow?</Accordion.Header>
                            <Accordion.Body>You need to submit 2 text. The system will look for longest common subsequence to generate comparison report. This report is also called Cross Comparison or Side by Side Comparison</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Container>
        </Container>
    )
}

export default Tool;