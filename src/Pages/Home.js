import React from "react";

import Selects from "../Components/Selects";
import Styles from "../Styles/Home.module.css";

import logo from "../images/logofundo.png";
import { ContactMail, ContactTel } from "../Components/Contact";

function Home()
{

    return(

        <div className={Styles.container}>
            <h1>CONSULTORIA & CONTROLADORIA</h1>
            <p>CONHEÇA SEUS BENEFÍCIOS</p>
            <img id="logoHome" src={logo} alt="Logo" />

            <Selects />

            <footer>
                <section className={Styles.contact}>
                    <section>
                        <div onClick={ContactTel} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                                <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
                            </svg>
                        </div>
                    </section>

                    <section>
                        <div onClick={ContactMail}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            
                        </div>
                    </section>
                </section>
            </footer>

        </div>

    )
}

export default Home;