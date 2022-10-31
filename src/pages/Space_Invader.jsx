import React from "react";

function SpaceInvader() {

    return (
        <div id="Social_Media">
            <h1 id="SocialMedia_h1">Space Invader</h1>
            <div id="SocialMedia_div_p">
                <p className="SocialMedia_p">
                    This game was made using: <br />Typescript <br /> and CSS/HTML5
                </p>
            </div>
            <div className="Home_div_button"> 
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.open('https://github.com/Ralaouni/SpaceInvaders.git','_blank');
                        }}>
                        Continues to Space Invader <br /> code
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.open('https://ralaouni.github.io/SpaceInvaders/','_blank');
                        }}>
                        Continues to Space Invader <br /> Game
                    </button>
            </div>
        </div>
    )
}

export default SpaceInvader

