import React from 'react';
import SetupData from '../../data/setup.json'

const SetupFolderStructure = () => {
	const { folder } = SetupData
	console.log(folder)
	return <>
		<h3>Folder Structure</h3>
		{
			Object.keys(folder).map((k, i) => {
				// @ts-ignore
				const data = folder[k]
				return <div className="ml-5" key={i.toString()}>
					<h3>{k}</h3>
					<ol>
						{
							Object.keys(data).map((key, index) => {
								return <li key={index.toString()}>{key}</li>
							})
						}
					</ol>
					<div>Now, we will discuss about each and every folders and their tasks.</div>
					{
						Object.keys(data).map((key, index) => {
							const description = data[key]
							return <div key={index.toString()}>
								<h6>{key}</h6>
								{Array.isArray(description) ?
									description.map((d, i) =>
										Array.isArray(d) ?
											<ul key={i.toString()}>{
												d.map((desc, i) => <li key={i.toString()}>{desc}</li>)
											}</ul> :
											<div key={i.toString()}>{d}</div>
									) :
									<div>{description}</div>}
							</div>
						})
					}
				</div>
			})
		}
	</>
}

export default SetupFolderStructure
