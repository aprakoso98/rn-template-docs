export type colorType = 'textTitle' | 'text' | 'dark' | 'softDark' | 'light' | 'link' | 'orange' | string & { color?: string }
const Colors: { [key in colorType]: string } = {
	dark: "#18191A",
	softDark: "#242526",
	light: "#fdfdfd",
	link: "#348dea",
	orange: "#fc6a57",
	textTitle: "#707070",
	text: "#ACACAC",
}
// @ts-ignore
const colorMap = (Type: colorType = "dark") => Colors[Type] || Type

export { Colors, colorMap }
