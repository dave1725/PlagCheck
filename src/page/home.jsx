import React from "react";
import Navbar from "../components/navbar";
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import background from "../page/bg.jpg";
import "../page/home.css"
function Home() {
    return (
        <Container fluid id="main" style={{padding: '0',margin: '0'}}>
            <Navbar />
            <Container fluid style={{height: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Container style={{background: '#00000077', backdropFilter: 'blur(15px)', color: 'white', padding: '5%', borderRadius: '1rem', textAlign: 'justify'}}>
                    <h1>PlagCheck</h1>
                    <p style={{fontSize: '1.5vw'}}>You can compare two texts by using the online text compare application. The content that you want to compare can be 
                        formatted also. We will provide you the similarity score.
                    </p>
                </Container>
                <Container style={{background: '#00000077', backdropFilter: 'blur(15px)', color: 'white', padding: '5%', borderRadius: '1rem', textAlign: 'justify', marginTop: '3%'}}>
                    <h1>Approach</h1>
                    <p style={{fontSize: '1.5vw'}}>PlagCheck finds the longest common subsequence to determine maximum number of words that are 
                    repeated. Longest common subsequence is found by using dynamic programming, that can generate result in O(n+m) time</p>
                </Container>
            </Container>
        </Container>
    )
}

export default Home;