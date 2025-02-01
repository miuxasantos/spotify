import React from "react";
import styles from "./Header.css";
import setaEsquerda from '../../assets/icons/small-left.png';
import setaDireita from '../../assets/icons/small-right.png';
import lupa from '../../assets/icons/search.png';

const Header = () => {
    return (
        <>
        <nav class="header__nav">
                <div class="navigation">
                    <div class="arrows">
                        <button class="arrow-left">
                            <img src={setaEsquerda} alt="Seta para esquerda"/>
                        </button>
                        <button class="arrow-right">
                            <img src={setaDireita} alt="Seta para direita"/>
                        </button>
                    </div>
                    <div class="header__search">
                        <img src={lupa}/>
                        <input id="search-input" type="text" maxlength="800" placeholder="O que você deseja ouvir?"/>
                    </div>

                    <div class="header__login">
                        <button class="inscrever">Inscreva-se</button>
                        <button class="login">Login</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;