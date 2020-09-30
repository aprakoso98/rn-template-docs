import React, { useState } from 'react'
import { Colors } from '../data/constants'

const Code = ({ children }: { children: string }) => {
	const [copied, setCopied] = useState(false)
	const [hover, setHover] = useState(false)
	const [icon, setIcon] = useState('copy')
	const onClick = () => {
		var aux = document.createElement("input")
		aux.setAttribute("value", children)
		document.body.appendChild(aux)
		aux.select()
		document.execCommand("copy")
		document.body.removeChild(aux)
		setCopied(true)
		setIcon('copied')
		setTimeout(() => {
			setCopied(false)
			setIcon('copy')
		}, 2000)
	}
	return <label
		onClick={onClick}
		onMouseEnter={() => setHover(true)}
		onMouseLeave={() => setHover(false)}
		className="pointer relative"
		style={{
			overflow: 'hidden',
			color: Colors.light,
			background: Colors.text,
			padding: (copied || hover) ? '5px 0 5px 10px' : "5px 10px",
			borderRadius: 5,
			lineHeight: '40px'
		}}>{children}{(copied || hover) && <label style={{
			borderRadius: 5,
			background: Colors.dark,
			padding: "5px 10px",
			marginLeft: -15,
			color: Colors.light
		}}>{icon}</label>}</label>
}

export default Code