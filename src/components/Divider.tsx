import React from 'react';
import { colorMap, colorType } from '../data/constants';

interface Props {
	size?: number
	color?: colorType
}

const Divider = ({ size = 1, color = 'textTitle' }: Props) => {
	color = colorMap(color)
	return <div style={{ background: color, width: '100%', padding: size / 2 }} />
}

export default Divider