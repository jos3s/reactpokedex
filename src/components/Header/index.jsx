import "./styles.css";

import pokedex from "./../../assets/pokedex.svg";

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

export const Header = () => (
	<div className="header-contend">
		<div className="box">
			<a
				href="https://www.flaticon.com/br/autores/roundicons-freebies"
				title="Roundicons Freebies"
			>
				<img src={pokedex} alt="Pokédex" id="pokedex" />
			</a>
			<div>
				<h1 className={"h1-" + types[num]}>Pokédex</h1>
				<p>
					by{" "}
					<a href="https://www.linkedin.com/in/jos3s/" alt="Linkedin" title="Linkedin" >
						<b>José Ulisses</b>
					</a>{" "}
					with{" "}
					<a
						href="https://pokeapi.co/"
						alt="PokeAPI"
						title="PokeAPI"
					>
						<b>PokeAPI</b>
					</a>
					, in 2021 -
					<a
						href="https://github.com/jos3s/reactpokedex"
						alt="Github"
						title="Github"
					>
						{" "}
						<b>Github</b>
					</a>
				</p>
			</div>
		</div>
	</div>
);
