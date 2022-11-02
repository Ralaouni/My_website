import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useScrollBlock } from '../Component/scroll_function/useScrollBlock'
import Pdf from '../Documents/GaetanKasCV.pdf'


function Home () {
    
    const [blockScroll, allowScroll] = useScrollBlock();

    blockScroll()
    
    const onClickCV = () => {
        window.open(Pdf);
    }

    const mountedStyle = { 
        animation: "inAnimation 300ms ease-in",
        };
    const unmountedStyle = {
        animation: "outAnimation 500ms ease-out",
        animationFillMode: "forwards",
        };
        
    const [hiddenSI, setHiddenSI] = useState(false);
    const [hiddenRS, setHiddenRS] = useState(false);
    const [hiddenP3, setHiddenP3] = useState(false);
    const [hiddenGH, setHiddenGH] = useState(false);

    const goToBottom = () => {
        allowScroll()
        window.scrollTo({
            top: 930 ,
            behavior: 'smooth',
        });
        setTimeout(() => {
            blockScroll()
        }, 600);
    };

    const goToTop = () => {
        allowScroll()
        window.scrollTo({
            top:0 ,
            behavior: 'smooth',
        });
        setTimeout(() => {
            blockScroll()
        }, 600);
    };


    return (
        <div id="Home">
            <h1 id="Home_h1"> Gaetan Kas Website</h1>
            <div>
                <section id="About_me">
                    <div id="About_me_div">
                        <div id="About_me_french" className="writing_div">
                            <h3>A propos de moi</h3>
                            <div className="background" >
                                <span>Expérience </span>
                                <div className="Losange"></div>
                                <div className="Losange Losange2"></div>
                                <div className="paragraph">
                                    <p className="p1">
                                        Diplômé d'une licence en sciences de la terre, j'ai décidé par la suite de voyager (Nouvelle-Zélande, Australie, États-Unis, ... ) et travailler en tant que saisonnier, dans des fermes, des cafés et des stations de ski. <br />...
                                    </p>
                                    <p className="p2 p2_left">
                                        Je me suis tourné vers la programmation car j’ai toujours eu à cœur les mathématiques, la logique et que mes cours d'informatique sur python et R étaient là meilleur partie de mes études de géologie. J'ai donc entrepris la formation de développeur web chez Openclassrooms que j’ai adorée.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div id="About_me_english" className="writing_div">
                            <h3>About me</h3>
                            <div className="background" >
                                <span>Experience</span>
                                <div className="Losange"></div>
                                <div className="Losange Losange2"></div>
                                <div className="paragraph">
                                    <p className="p1">
                                        Graduated with a bachelor degree in earth science, I decided to travel (New Zealand, Australia, United-States, ...) and worked as a seasonal worker, in farms, coffee shop, and ski stations. <br />...
                                    </p>
                                    <p className="p2 p2_right">
                                        After that I started programming because I always liked math and logics, and I have to say that my computer science cursus on Python and R were the best parts of my studies in Geology. So I began the web developer training on OpenClassroooms, and I loved it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={onClickCV} id="CV_div">
                            <div className="Losange_CV Losange_CV_1"></div>
                                <div id="CV">
                                
                                    My CV (French)
                                
                                </div>
                            <div className="Losange_CV Losange_CV_2"></div>
                    </button>
                    <div className="bottom_button_div">
                        <button className="bottom_button bottom_button_left" onClick={() => {
                            goToBottom()
                        }}>
                            Go to My Projects
                            <FontAwesomeIcon className="arrow_down_icon" icon={faArrowDown} />
                        </button>
                        <button className="bottom_button bottom_button_right" onClick={() => {
                            goToBottom()
                        }}>
                            Go to My Projects
                            <FontAwesomeIcon className="arrow_down_icon" icon={faArrowDown} />
                        </button>
                    </div>
                </section>
                <div id="Second_screen">
                    <section id="My_Projects">   
                            <div className="up_button_div">
                                <button className="up_button up_button_left" onClick={() => {
                                            goToTop()
                                        }}>
                                            <FontAwesomeIcon className="arrow_down_icon" icon={faArrowUp} />
                                    Go back Home
                                    
                                </button>
                                <button className="up_button up_button_right" onClick={() => {
                                    goToTop()
                                }}>
                                    <FontAwesomeIcon className="arrow_down_icon" icon={faArrowUp} />
                                    Go back Home
                                </button> 
                            </div>
                        <h2 className="Home_h2">My Projects</h2>
                        <div id="Home_Link">
                            <div className="Home_div_button"> 
                                <button className="projectbutton" onClick={() => {setHiddenSI(!hiddenSI)
                                setHiddenRS(false)
                                setHiddenGH(false)
                                setHiddenP3(false)}}>
                                    Space Invader game
                                </button>
                                <div style={hiddenSI ? mountedStyle : unmountedStyle} id="Space_Invader" className="Hidden_projects">
                                        <h2 id="Space_Invader_h2">Space Invader</h2>
                                        <div id="Space_Invader_div">
                                            <p className="Space_Invader_p">
                                                This game is a proect of my own and was made using: <br /><span>Typescript</span> <br /> and <span>CSS</span> / <span>HTML5</span>
                                            </p>
                                        </div>
                                        <div className="link_button_div"> 
                                                <button className="link_button" onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://github.com/Ralaouni/SpaceInvaders.git','_blank');
                                                    }}>
                                                    Continue to Space Invader <br /> <span>CODE</span>
                                                </button>
                                                <button className="link_button" onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://ralaouni.github.io/SpaceInvaders/','_blank');
                                                    }}>
                                                    Continue to Space Invader <br /> <span>GAME</span>
                                                </button>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="Home_div_button"> 
                                <button className="projectbutton" onClick={(e) => {
                                    setHiddenRS(!hiddenRS)
                                    setHiddenSI(false)
                                    setHiddenGH(false)
                                    setHiddenP3(false)
                                    }}>
                                    Corporate social network
                                </button>
                                <div style={hiddenRS ? mountedStyle : unmountedStyle}  id="Social_Media" className="Hidden_projects">
                                    <h2 id="SocialMedia_h2">Social Media</h2>
                                    <div id="SocialMedia_div_p">
                                        <p className="SocialMedia_p">
                                            This was made using: <br /><span>React</span> as framework <br /> <span>Javascript</span> and <span>CSS</span> for the front end <br /> <br />
                                            For the back-end <br /> <span>Node.js</span> <br /> <span>MongoDB</span> as the database
                                        </p>
                                        <p className="SocialMedia_p">
                                        
                                        </p>
                                    </div>
                                    <div className="link_button_div"> 
                                            <button className="link_button" onClick={(e) => {
                                                e.preventDefault();
                                                window.open('https://github.com/Ralaouni/OC_P_7.git','_blank');
                                                }}>
                                                Continue to Github <br /> <span>CODE</span>
                                            </button>
                                    </div>
                                </div>
                            </div>
                            <div className="Home_div_button">
                                    <button className="projectbutton" onClick={(e) => {
                                    setHiddenRS(false)
                                    setHiddenSI(false)
                                    setHiddenGH(false)
                                    setHiddenP3(!hiddenP3)
                                    }}>
                                        HTML5/SASS Project
                                    </button>
                                    <div style={hiddenP3 ? mountedStyle : unmountedStyle}  id="Social_Media" className="Hidden_projects">
                                        <h2 id="SocialMedia_h2">Oh My Food</h2>
                                        <div id="SocialMedia_div_p">
                                            <p className="SocialMedia_p">
                                                This was made using: 
                                                <br /><span>HTML5</span> / <span>SASS</span>
                                                <br />
                                                <br />
                                                It was my second project on OpenClassrooms 
                                                <br /> Here I discovered SASS and the CSS animations
                                            </p>
                                        </div>
                                        <div className="link_button_div"> 
                                                <button className="link_button" onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://ralaouni.github.io/OpenClassroom-P_3/','_blank');
                                                    }}>
                                                    Continue to Github <br /> <span>PAGE</span>
                                                </button>
                                                <button className="link_button" onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://github.com/Ralaouni/OC_P_7.git','_blank');
                                                    }}>
                                                    Continue to Github <br /> <span>CODE</span>
                                                </button>
                                        </div>
                                    </div>
                            </div>
                            <div className="Home_div_button">
                                    <button className="projectbutton"  onClick={(e) => {
                                    setHiddenRS(false)
                                    setHiddenSI(false)
                                    setHiddenGH(!hiddenGH)
                                    setHiddenP3(false)
                                    }}>
                                        All my other Github repositories
                                    </button>
                                    <div style={hiddenGH ? mountedStyle : unmountedStyle}  id="Github" className="Hidden_projects">
                                        <h2 id="GH_h2">Other Github rep</h2>
                                        <div id="All_other_projects">
                                            <div className="GH_div">
                                                <p className="GH_p">
                                                    This is the link to all my <span>repositories</span> on Github 
                                                    <br /> <br /> My <span>other</span> OpenClassrooms Projects
                                                    <br />And some <span>unfinished</span> ones too
                                                </p>
                                                <div className="link_button_div"> 
                                                        <button className="link_button" onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open('https://github.com/Ralaouni?tab=repositories','_blank');
                                                            }}>
                                                            Continue to Github <br /> <span>REPOSITORIES</span>
                                                        </button>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                            </div>
                        </div>

                        
                    </section>

                    <footer>
                            <div className="Home_div_button">
                                <button id="Contact_me" onClick={(e)=>{
                                    window.location.href = 'mailto:gaetankas@hotmail.com'
                                }}>
                                    Contact Me
                                </button>

                                <button id="linkedin_button" onClick={(e) => {
                                    e.preventDefault()
                                    window.open('https://www.linkedin.com/in/gaetan-kas-738829166','_blank')
                                }}><FontAwesomeIcon className="linkedin" icon={faLinkedinIn}  /></button>
                            </div>
                            <p>thanks to the artist of the background image <a href="https://unsplash.com/@virussinside" target="_blank" rel="noreferrer">Mukulwadhwa</a></p>
                    </footer>
                </div>
            </div>
            
        </div>
    )
}

export default Home
