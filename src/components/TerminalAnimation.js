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
  const isFinishedRef = useRef(false);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  const finishImmediately = () => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;
    if (onCompleteRef.current) onCompleteRef.current();
  };

  useEffect(() => {
    if (animationStartedRef.current) return;
    animationStartedRef.current = true;

    const handleKeyDown = () => finishImmediately();
    window.addEventListener('keydown', handleKeyDown);

    const cursorInterval = setInterval(() => setShowCursor(p => !p), 400);

    const runAnimation = async () => {
      for (let i = 0; i < messages.length; i++) {
        if (isFinishedRef.current) break;
        const message = messages[i];
        const speed = 14 + Math.random() * 14; // snappy typing speed
        for (let j = 0; j < message.length; j++) {
          if (isFinishedRef.current) break;
          setDisplayText(message.substring(0, j + 1));
          await new Promise(r => setTimeout(r, speed));
        }
        if (isFinishedRef.current) break;
        await new Promise(r => setTimeout(r, 450));
        setMessageHistory(prev => [...prev, message]);
        setDisplayText('');
      }
      setTimeout(() => { finishImmediately(); }, 150);
    };

    runAnimation();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [messageHistory, displayText]);

  return (
    <div className="terminal-overlay" onClick={finishImmediately} style={{ cursor: 'pointer' }}>
      <div className="terminal-container" onClick={(e) => e.stopPropagation()}>
        {/* Scanline effect */}
        <div className="terminal-scanlines" />

        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close" onClick={finishImmediately} style={{ cursor: 'pointer' }} />
            <div className="terminal-button minimize" />
            <div className="terminal-button maximize" />
          </div>
          <div className="terminal-title">john@portfolio: ~</div>
          <button
            onClick={finishImmediately}
            style={{
              background: 'rgba(108, 99, 255, 0.2)',
              border: '1px solid rgba(108, 99, 255, 0.4)',
              color: '#fff',
              borderRadius: '6px',
              padding: '2px 10px',
              fontSize: '0.72rem',
              cursor: 'pointer',
              marginLeft: 'auto'
            }}
          >
            Skip ↵
          </button>
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