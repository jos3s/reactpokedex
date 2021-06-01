import { useState, useEffect, useCallback } from "react";

import "./styles.css";

import { Header } from "../../components/Header";
import { Cards } from "../../components/Cards";
import { loadPokemon } from "./../../utils/loadPokemons";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

const Home = () => {
	document.title = "Pokédex - Jos3s";
	const [pokemons, setPokemons] = useState([]);
	const [allPokemons, setAllPokemons] = useState([]);
	const [page, setPage] = useState(0);
	const [pokemonsPerPage] = useState(5);
	const [searchValue, setSearchValue] = useState("");

	const numPokemonsAPI = 889;
	const noNextPokemons = page + pokemonsPerPage === numPokemonsAPI;
	const noPreviousPokemons = page === 0;

	const filteredPokemons = !!searchValue
		? allPokemons.filter((pokemon) => {
				return pokemon.name
					.toLowerCase()
					.includes(searchValue.toLowerCase());
		  })
		: pokemons;

	const handleLoadPokemons = useCallback(async (page, pokemonsPerPage) => {
		const pokemonsAndPhotos = await loadPokemon(page, pokemonsPerPage);
		setPokemons(pokemonsAndPhotos.slice(page, pokemonsPerPage));
		setAllPokemons(pokemonsAndPhotos);
	}, []);

	const loadMorePokemons = async () => {
		const nextPage = page + pokemonsPerPage;
		const nextPokemons = await loadPokemon(nextPage, pokemonsPerPage);
		pokemons.push(...nextPokemons);

		setPokemons(pokemons);
		setPage(nextPage);
	};

	const loadLessPokemons = () => {
		const previousPage = page - pokemonsPerPage;
		pokemons.splice(page, pokemonsPerPage);

		setPokemons(pokemons);
		setPage(previousPage);
	};

	const handleChangeSearchValue = (e) => {
		const { value } = e.target;
		setSearchValue(value);
	};

	useEffect(() => {
		handleLoadPokemons(0, pokemonsPerPage);
	}, [handleLoadPokemons, pokemonsPerPage]);

	return (
		<section className="container ">
			<Header />
			<div className="search-container">
				{!!searchValue && (
					<>
						<h2>Search: {searchValue}</h2>
						{filteredPokemons.length > 0 ? (
							<p>
								<i> {filteredPokemons.length} pokémos finds</i>
							</p>
						) : (
							<p></p>
						)}
					</>
				)}

				<TextInput
					searchValue={searchValue}
					handleChange={handleChangeSearchValue}
				/>
			</div>
			{filteredPokemons.length > 0 && (
				<Cards pokemons={filteredPokemons}></Cards>
			)}

			{filteredPokemons.length === 0 && <p>Your search found no posts</p>}

			<div className="button-container">
				{!searchValue && (
					<>
						<Button
							onClick={loadLessPokemons}
							text="Load less pokémons"
							disabled={noPreviousPokemons}
						/>
						<Button
							onClick={loadMorePokemons}
							text="Load more pokémons"
							disable={noNextPokemons}
						/>
					</>
				)}
			</div>
		</section>
	);
};

export default Home;
