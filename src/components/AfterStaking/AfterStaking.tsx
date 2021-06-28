import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #9999ff;
  border: none;
  margin: auto;
  -webkit-clip-path: polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);
  clip-path: polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);

  :hover {
    transition-duration: 0.3s;
    background-color: #411789;
  }

  :active {
    background-color: #fed800;
    transition-duration: 0.1s;
    transform: translateY(4px);
  }
`

const BodyWrapper = styled.div`
  padding: 1vh;
  box-sizing: border-box;
  background: radial-gradient(circle, rgba(63, 94, 251, 0.9) 0%, rgba(203, 70, 252, 0.3) 100%);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  counter-reset: section;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  overflow-x: hidden;
  max-height: 900px;
  max-width: 600px;
  width: 95%;
  border-radius: 15px;
  margin: auto;
`

const Messages = styled.div`
  @charset "UTF-8";
  @import url('https://fonts.googleapis.com/css?family=Lato:400,900|Open+Sans:400,800');

  details {
    max-width: 600px;
    width: 90%;
    padding: 0 30px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  summary {
    position: relative;
    font-size: 46px;
    outline: 0;
    overflow: hidden;
    cursor: crosshair;
    transition: all 0.1s ease-out;
    -webkit-clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
    clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
    background: #fedd00;
    padding: 20px 15px 18px 35px;
    font-size: 1em;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    margin: 0 0 15px;
    list-style-type: none;
  }
  summary::marker {
    display: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary:hover {
    text-indent: 30px;
  }
  summary:hover:before {
    text-indent: -10px;
  }
  summary:before {
    counter-increment: section;
    content: counter(section);
    position: absolute;
    color: rgba(0, 0, 0, 0.5);
    right: 20%;
    top: 0px;
    font-size: 40px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    transition: all 0.1s ease-out;
    mix-blend-mode: overlay;
  }
  summary:after {
    content: '+';
    position: absolute;
    font-size: 2em;
    right: 35px;
    top: 50%;
    color: #000;
    line-height: 0;
    transform: translatey(-50%);
    mix-blend-mode: overlay;
  }

  details[open] summary {
    text-indent: 50px;
  }
  details[open] summary:before {
    text-indent: -10px;
  }
  details[open] summary:after {
    content: '–';
  }

  details[open] summary ~ * {
    -webkit-animation: animationRotate 0.4s ease-out forwards;
    animation: animationRotate 0.4s ease-out forwards;
    color: white;
  }

  @-webkit-keyframes animationRotate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translatex(50%);
    }
  }

  @keyframes animationRotate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translatex(10%);
    }
  }
`
const AfterStaking = () => {
  return (
    <BodyWrapper>
      <Messages>
        <details>
          <summary>A message from us Penguins!</summary>
          <h2 style={{ fontSize: '18px', marginTop: '10px', marginBottom: '10px' }}>
            First we would like to thank you!
          </h2>
        </details>
      </Messages>
      <Messages>
        <details>
          <summary>Staking</summary>
          <h2 style={{ fontSize: '18px', marginTop: '10px', marginBottom: '10px' }}>
            Our staking program has been a huge succes and we could not have done it without you!
          </h2>
        </details>
      </Messages>
      <Messages>
        <details>
          <summary>Claim</summary>
          <h2 style={{ fontSize: '18px', marginTop: '10px', marginBottom: '10px' }}>
            You have (I'm going to put the claimable amount of fish here if possible without slowing the thing down)
            fish to claim. Go to the staking page to claim you fish!
          </h2>
        </details>
      </Messages>
      <Messages>
        <details>
          <summary>News</summary>
          <h2 style={{ fontSize: '18px', marginTop: '-10px', marginBottom: '10px' }}>
            We will launch our V3 exchange with advanced analytics and charting soon! Stay tuned!
          </h2>
        </details>
      </Messages>
      <Button>Dismiss this message</Button>
    </BodyWrapper>
  )
}

export default AfterStaking
