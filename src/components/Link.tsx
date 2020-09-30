import React from 'react';

interface Props {
	href: string
	children?: string
}

const Link = ({ href, children }: Props) => {
	return <a href={href} target="_blank" rel="noopener noreferrer" children={children || href} />
}

export default Link