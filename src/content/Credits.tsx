import React from 'react';
import Link from '../components/Link';
import credits from '../data/credits.json'

const Credits = () => {
	const { source, ...rest } = credits
	return <div id="credits">
		<h1>Source and Credits</h1>
		<ul style={{ listStyle: 'square' }}>
			{
				// @ts-ignore
				Object.keys(source).rMap(key => <li><Link href={source[key]}>{key}</Link></li>)
			}
		</ul>
		{
			Object.keys(rest).rMap(k => <>
				<h3>{k}</h3>
				<ul style={{ listStyle: 'square' }}>
					{
						// @ts-ignore
						Object.keys(rest[k]).rMap(key => <li><Link href={rest[k][key]}>{key}</Link></li>)
					}
				</ul>
			</>)
		}
	</div>
}

export default Credits