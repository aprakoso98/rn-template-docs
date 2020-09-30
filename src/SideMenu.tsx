/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

let content: HTMLElement

const SideMenu = () => {
	const [active, setActive] = useState('welcome')
	const buttons: { [key: string]: string } = {
		welcome: 'Welcome',
		setup: 'Setup Environment',
		running: 'Running your App',
		stack: 'Stack We Used',
		credits: 'Source and Credits',
	}
	const navigate = (idTarget: string) => {
		const target = document.querySelector('#' + idTarget) as HTMLElement
		if (target) {
			content.focus()
			content.scrollTo({
				top: target.offsetTop,
				left: 0,
				behavior: "smooth"
			})
		}
	}
	const effect = () => {
		content = document.querySelector('#content') as HTMLElement
		if (content) {
			// @ts-ignore
			content.addEventListener('scroll', ({ target: { children, scrollTop } }: {
				target: {
					scrollTop: number
					children: HTMLCollection
				}
			}) => {
				for (var i = children.length - 1; i >= 0; i--) {
					const element = children.item(i) as HTMLElement
					var position = element.offsetTop
					if (scrollTop >= position) {
						setActive(element.id)
						break
					}
				}
			})
			content.focus()
		}
	}
	useEffect(effect, [])
	return <div id="side-menu" tabIndex={1} className="flex flex-col w-1/5">
		<div className="logo">elern<label>.</label></div>
		{Object.keys(buttons).rMap(key => {
			const btn = buttons[key]
			return <a
				className={`pointer ${active === key ? 'active' : ''}`}
				onClick={() => navigate(key)}>{btn}</a>
		})}
	</div>
}

export default SideMenu