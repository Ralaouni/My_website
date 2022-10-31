import React from "react"

function SocialMedia() {

    return (
        <div id="Social_Media">
            <h1 id="SocialMedia_h1">Social Media</h1>
            <div id="SocialMedia_div_p">
                <p className="SocialMedia_p">
                    This was made using: <br />React as framework <br /> javascript and CSS for the front end 
                </p>
                <p className="SocialMedia_p">
                For the back-end <br /> Node.js <br /> MongoDB as the database
                </p>
            </div>
            <div className="Home_div_button"> 
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.open('https://github.com/Ralaouni/OC_P_7.git','_blank');
                        }}>
                        Continues to Github code
                    </button>
            </div>
        </div>
    )
}

export default SocialMedia