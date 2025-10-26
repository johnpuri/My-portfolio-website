import React, { useState, useEffect, useRef } from 'react';
import '../css/TerminalAnimation.css';

const messages = [
  "John's Portfolio auth log in",
  "You are Authenticated",
  "Welcome to My Portfolio"
];

const TerminalAnimation = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const terminalContentRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const animationStartedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (animationStartedRef.current) {
      return;
    }
    animationStartedRef.current = true;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const runAnimation = async () => {
      for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        for (let j = 0; j < message.length; j++) {
          setDisplayText(message.substring(0, j + 1));
          await new Promise(resolve => setTimeout(resolve, 80));
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        setMessageHistory(prev => [...prev, message]);
        setDisplayText('');
      }

      setTimeout(() => {
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }, 100);
    };

    runAnimation();

    return () => {
      clearInterval(cursorInterval);
    };
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [messageHistory, displayText]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">Terminal</div>
      </div>
      <div className="terminal-content" ref={terminalContentRef}>
        {messageHistory.map((message, index) => (
          <div className="terminal-line" key={index}>
            <span className="terminal-prompt">$ </span>
            <span className="terminal-text">{message}</span>
          </div>
        ))}
        <div className="terminal-line">
          <span className="terminal-prompt">$ </span>
          <span className="terminal-text">{displayText}</span>
          {showCursor && <span className="terminal-cursor">|</span>}
        </div>
      </div>
    </div>
  );
};

export default TerminalAnimation;