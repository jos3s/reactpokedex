import "./styles.css";

import { Tag } from "../Tag";

export const Card = ({ name, id, cover, types }) => (
	<div className={`card ${types[0]}`}>
		<img src={cover} alt={name} />
		<div className="card-content">
			<h3>
				{name} - #{id}
			</h3>
			<div className="card-tags">
				{types.map((type, idx) => {
					return <Tag type={type} key={idx}></Tag>;
				})}
			</div>
		</div>
	</div>
);
