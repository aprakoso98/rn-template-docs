import React from 'react';
import Divider from './Divider';

interface Props {
	children: string
	align?: "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start"
}

const Title = ({ align: textAlign = 'center', children }: Props) => {
	return <>
		<Divider />
		<h1 style={{ textAlign, margin: '15px 0' }}>{children}</h1>
		<Divider />
	</>
}

export default Title