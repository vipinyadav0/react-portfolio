import React from 'react'
import "../Skills/Skills.css"

function Skills() {
    return (
        <section className="skill-bars">
            <div className="bar">
                <div className="info">
                    <span>Python</span>
                </div>
                <div className="progress-line python">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Django & DRF</span>
                </div>
                <div className="progress-line django">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Javascript</span>
                </div>
                <div className="progress-line javascript">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>ReactJS</span>
                </div>
                <div className="progress-line reactjs">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>MySQL</span>
                </div>
                <div className="progress-line mysql">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Git & GitHub</span>
                </div>
                <div className="progress-line git">
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default Skills