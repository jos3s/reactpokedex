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
	const [filter, setFilter] = useState("name");

	const numPokemonsAPI = 889;
	const noNextPokemons = page + pokemonsPerPage === numPokemonsAPI;
	const noPreviousPokemons = page === 0;

	const filteredPokemons = !!searchValue
		? allPokemons.filter((pokemon) => {
			if (filter === "name") {
				return pokemon.name
					.toLowerCase()
					.includes(searchValue.toLowerCase());
			}  else if (filter === "id") {
				return pokemon.id.toString().includes(searchValue);
			} else {
				return pokemon.types
					.join(" ")
					.toLowerCase()
					.includes(searchValue.toLowerCase());
			}
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
		setAllPokemons(pokemons);
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
	const handleChangeFilter = (e) => {
		const { value } = e.target;
		console.log(value);
		setFilter(value);
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

				<div onChange={handleChangeFilter} className="filter-container">
					<p>Search for:</p>
					<label htmlFor="radio-name">
						Name
						<input
							type="radio"
							name="filter"
							value="name"
							id="radio-name"
							defaultChecked={filter === "name"}
						/>
					</label>
					<label htmlFor="radio-ID">
						ID
						<input
							type="radio"
							name="filter"
							value="id"
							id="radio-ID"
						/>
					</label>
					<label htmlFor="radio-type">
						Type
						<input
							type="radio"
							name="filter"
							value="type"
							id="radio-type"
						/>
					</label>
				</div>
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
