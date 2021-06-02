export const loadPokemon = async (page, postsPerPage) => {
	const infoPokemons = Array(postsPerPage)
		.fill()
		.map((_, idx) =>
			fetch(`https://pokeapi.co/api/v2/pokemon/${idx + page + 1}`).then(
				(res) => res.json()
			)
		);

	const photosPokemon = Array(postsPerPage)
		.fill()
		.map(
			(_, idx) =>
				`https://pokeres.bastionbot.org/images/pokemon/${
					idx + page + 1
				}.png`
		);

	const infos = await Promise.all(infoPokemons);

	const statistics = infos.map(({ stats }) => {
		return stats.map(({ base_stat, stat }) => {
			return { name: stat.name, value: base_stat };
		});
	});

	const pokemons = infos.map(({ name, types, id }, idx) => {
		return {
			id,
			name,
			types: types.map((types) => types.type.name),
			stats: statistics[idx],
			cover: photosPokemon[idx],
		};
	});

	return pokemons;
};
