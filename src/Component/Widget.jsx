import React, { useState } from 'react';
import { GrCircleQuestion } from "react-icons/gr";

function Widget() {
    const [activeButton, setActiveButton] = useState('about');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const getContent = () => {
        switch (activeButton) {
            case 'experience':
                return (
                    <>
                        I have worked in various roles and have gained extensive experience in sales, customer relations, and team management.<br/><br/>
                        My focus has always been on delivering results and providing exceptional service.<br/>
                        Over the years, I have developed a deep understanding of market dynamics and client needs.<br/>
                        I am committed to leveraging this experience to drive growth and foster strong client relationships.
                    </>
                );
            case 'recommended':
                return (
                    <>
                        I highly recommend connecting with me to learn more about how Salesforce can help streamline your business processes and drive growth.<br />
                        Our team can offer tailored solutions that fit your specific needs and objectives.<br/>
                        Feel free to reach out for a personalized demo and see how we can assist in achieving your business goals.<br/>
                        Let’s discuss how we can create value for your organization.
                    </>
                );
            case 'about':
            default:
                return (
                    <>
                        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br/> <br/>
                        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                    </>
                );
        }
    };

    return (
       <>
        <div className='widget-container'>
            <div className='button-container'>
                <button
                    onClick={() => handleButtonClick('about')}
                    className={`button ${activeButton === 'about' ? 'active' : ''}`}
                >
                    About Me
                </button>
                <button
                    onClick={() => handleButtonClick('experience')}
                    className={`button ${activeButton === 'experience' ? 'active' : ''}`}
                >
                    Experience
                </button>
                <button
                    onClick={() => handleButtonClick('recommended')}
                    className={`button ${activeButton === 'recommended' ? 'active' : ''}`}
                >
                    Recommended
                </button>
            </div>
            <div className='widget-desc'>
                <p>{getContent()}</p>
            </div>
            <div className='bulletin'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='question-mark'>
                <GrCircleQuestion style={{ width: "24px", height: "24px", color: '#888989' }} />
            </div>
        </div>
        <div className='end-line'></div>
       </>
    );
}

export default Widget;
