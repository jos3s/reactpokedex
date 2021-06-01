import "./styles.css";

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
		<h1 className={"h1-" + types[num]}>Pokédex</h1>
		<p>
			por{" "}
			<a href="https://www.linkedin.com/in/jos3s/" alt="Linkedin">
				<b>José Ulisses</b>
			</a>
			, em 2021 -
			<a href="https://github.com/jos3s/reactpokedex" alt="Github">
				{" "}
				<b>Github</b>
			</a>
		</p>
	</div>
);
