import React from 'react';
import './Writing.css';

const Writing = () => {
    return (
        <section id="writing" className="writing">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">Writing</span>
                    <h2>Words & Ideas</h2>
                    <p className="section-subtitle">
                        Thoughts on finance, technology, and stories.
                    </p>
                </div>

                <div className="writing-grid">
                    <a
                        href="https://rishiwrites.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="writing-card large animate-on-scroll"
                    >
                        <div className="card-glow"></div>
                        <div className="writing-content">
                            <span className="writing-tag">Blog</span>
                            <h3>Rishi Writes</h3>
                            <p>Personal blog covering quant trading, tech tutorials, and reflections on learning.</p>
                            <span className="writing-link">
                                <span>Visit Blog</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </span>
                        </div>
                    </a>

                    <a
                        href="https://www.wattpad.com/story/396813666-unwritten-pages"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="writing-card animate-on-scroll"
                    >
                        <div className="card-glow"></div>
                        <div className="writing-content">
                            <span className="writing-tag">Book</span>
                            <h3>Unwritten Pages</h3>
                            <p>A creative writing project. Stories and ideas beyond code.</p>
                            <span className="writing-link">
                                <span>Read on Wattpad</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Writing;
