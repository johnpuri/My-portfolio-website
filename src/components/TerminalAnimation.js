import React, { useState, useEffect, useRef } from 'react';
import '../css/TerminalAnimation.css';

const messages = [
  "Initializing John's Portfolio...",
  "Authentication: SUCCESS ✓",
  "Welcome to John Purification's Portfolio",
];

const TerminalAnimation = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const terminalContentRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const animationStartedRef = useRef(false);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    if (animationStartedRef.current) return;
    animationStartedRef.current = true;

    const cursorInterval = setInterval(() => setShowCursor(p => !p), 500);

    const runAnimation = async () => {
      for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const speed = 50 + Math.random() * 40; // randomized typing speed
        for (let j = 0; j < message.length; j++) {
          setDisplayText(message.substring(0, j + 1));
          await new Promise(r => setTimeout(r, speed));
        }
        await new Promise(r => setTimeout(r, 1800));
        setMessageHistory(prev => [...prev, message]);
        setDisplayText('');
      }
      setTimeout(() => { if (onCompleteRef.current) onCompleteRef.current(); }, 200);
    };

    runAnimation();
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [messageHistory, displayText]);

  return (
    <div className="terminal-overlay">
      <div className="terminal-container">
        {/* Scanline effect */}
        <div className="terminal-scanlines" />

        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close" />
            <div className="terminal-button minimize" />
            <div className="terminal-button maximize" />
          </div>
          <div className="terminal-title">john@portfolio: ~</div>
        </div>

        <div className="terminal-content" ref={terminalContentRef}>
          <div className="terminal-welcome">
            <pre className="ascii-banner">{`
   ___  ____  __  ____  _  _
  (_  )( ___)(  )(_  _)( \\/ )
   / /_ )__)  )(__ _)(_  \\  /
  (____)(___)(____)(____) (__)
            `.trim()}</pre>
          </div>

          {messageHistory.map((message, index) => (
            <div className="terminal-line done" key={index}>
              <span className="terminal-prompt">
                <span className="prompt-user">john</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">portfolio</span>
                <span className="prompt-colon">:</span>
                <span className="prompt-tilde">~</span>
                <span className="prompt-dollar">$</span>
              </span>
              <span className="terminal-text">{message}</span>
            </div>
          ))}

          <div className="terminal-line">
            <span className="terminal-prompt">
              <span className="prompt-user">john</span>
              <span className="prompt-at">@</span>
              <span className="prompt-host">portfolio</span>
              <span className="prompt-colon">:</span>
              <span className="prompt-tilde">~</span>
              <span className="prompt-dollar">$</span>
            </span>
            <span className="terminal-text">{displayText}</span>
            {showCursor && <span className="terminal-cursor">▋</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalAnimation;