import "./styles.css";

import pokedex from "./../../assets/pokedex.svg";
import { ThemeButton } from "../ThemeButton";

const types = [
	"grass",
	"steel",
	"fire",
	"electric",
	"water",
	"ground",
	"rock",
	"fairy",
	"poison",
	"bug",
	"dragon",
	"psychic",
	"flying",
	"fighting",
	"dark",
	"ghost",
];

const num = Math.floor(Math.random() * types.length + 1);

export const Header = ({ handleClick, theme }) => (
  <div className="header-contend">
    <div className="box">
      <a
        href="https://www.flaticon.com/br/autores/roundicons-freebies"
        title="Roundicons Freebies"
      >
        <img src={pokedex} alt="Pokédex" id="pokedex" />
      </a>
      <div className="header-text">
        <div className="header-title">
          <h1 className={"h1-" + types[num]}>Pokédex</h1>
          <ThemeButton handleClick={handleClick} theme={theme} />
        </div>
        <p>
          by{" "}
          <a href="https://www.linkedin.com/in/jos3s/" alt="Linkedin">
            <b>José Ulisses</b>
          </a>{" "}
          with{" "}
          <a
            href="https://pokeapi.co"
            title="Pokeapi"
          >
            <b>PokeAPI</b>
          </a>
          , in 2021 -
          <a href="https://github.com/jos3s/reactpokedex" alt="Github">
            {" "}
            <b>Github</b>
          </a>
        </p>
      </div>
    </div>
  </div>
);
