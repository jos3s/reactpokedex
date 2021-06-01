import "./styles.css";

import { Card } from "./../Card";

export const Cards = ({ pokemons }) => (
	<div className="cards">
		{pokemons.map((pokemon) => (
			<Card
				key={pokemon.id}
				name={pokemon.name}
				cover={pokemon.cover}
				id={pokemon.id}
				types={pokemon.types}
			/>
		))}
	</div>
);
