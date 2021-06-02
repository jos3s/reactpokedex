import "./styles.css";

import { Tag } from "../Tag";


const statName = (name) => {
	if (name.length === 2) return name;
	const parts = name.split("-");
	return parts.length === 1 ? parts[0][0] : parts[0][0] + parts[1][0];
};

export const Card = ({ name, id, cover, types, stats }) => (
	<div className={`card ${types[0]}`}>
		<img src={cover} alt={name} />
		<div className="card-content">
			<h3>
				{name} - #{id}
			</h3>
			<div className="card-tags tags-types">
				{types.map((type, idx) => {
					return (
						<Tag type={type} key={idx}>
							<p>{type}</p>
						</Tag>
					);
				})}
			</div>
			<div className="card-stats">
				<p className="stats-text">Basic stats:</p>
				<div className="card-tags  tag-stats">
					{console.log(stats)}
					{stats.map((stat, idx) => {
						return idx < 3 ? (
							<Tag type="normal" key={stat.name + name}>
								<p>
									{statName(stat.name)}: {stat.value}
								</p>
							</Tag>
						) : (
							<></>
						);
					})}
				</div>
			</div>
		</div>
	</div>
);
