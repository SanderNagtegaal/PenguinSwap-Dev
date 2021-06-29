import React, { useState } from 'react'
import styled from 'styled-components'

const MessageText = styled.text`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,900|Open+Sans:400,800');
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: bold;
`

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
  margin-top: 40px;
  -webkit-clip-path: polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);
  clip-path: polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);

  :hover {
    transition-duration: 0.3s;
    background-color: #411789;
  }

  :active {
    background-color: #fed800;
    color: black;
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
  @import url('https://fonts.googleapis.com/css?family=Lato:400,900|Open+Sans:400,800');

  details {
    max-width: 600px;
    width: 90%;
    padding: 0 30px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  summary {
    position: relative;
    font-size: 1em;
    outline: 0;
    overflow: hidden;
    cursor: crosshair;
    transition: all 0.1s ease-out;
    -webkit-clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
    clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
    background: #fedd00;
    padding: 20px 15px 18px 35px;
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
    cursor: pointer;
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
  // Create a dismiss value so that the component disappears after the user click the button
  // Also create the function be called by the button
  const [dismissValue, setDismissValue] = useState('false')

  const setButtonDismissed = () => {
    setDismissValue('true')
  }

  // Check if "Dismiss message" button has been clicked. If true, don't display this component
  if (dismissValue === 'true') {
    return null
  } else {
    return (
      <BodyWrapper>
        <Messages>
          <details>
            <summary>A message from us Penguins!</summary>
            <MessageText>First we would like to thank you!</MessageText>
          </details>
        </Messages>
        <Messages>
          <details>
            <summary>Staking</summary>
            <MessageText>
              Our staking program has been a huge succes and we could not have done it without you!
            </MessageText>
          </details>
        </Messages>
        <Messages>
          <details>
            <summary>Claim</summary>
            <MessageText>
              You might have fish to claim if you staked. Go to the staking page to{' '}
              <a href="#/uni" style={{ color: 'white' }}>
                CLAIM
              </a>{' '}
              your fish!
            </MessageText>
          </details>
        </Messages>
        <Messages>
          <details>
            <summary>News</summary>
            <MessageText>
              We will launch our V3 exchange with advanced analytics and charting soon. Thanks for being with us!
            </MessageText>
          </details>
        </Messages>
        <Button onClick={setButtonDismissed}>Dismiss this message</Button>
      </BodyWrapper>
    )
  }
}

export default AfterStaking
