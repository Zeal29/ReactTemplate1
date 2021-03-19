// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { pxToRem } from "./Helper";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
	colors: {
		primary: "#F7B445",
		secondary: "#96D0E4",
		accent1: "#7E77DD",
		accent2: "#D247AA",
		accent3: "#53C686",

		gray1: "#F1F3F6",
		gray2: "#E0E3E8",
		gray3: "#BDC7D3",
		gray4: "#99A9BB",
		gray5: "#1A2537",
	},
	fonts: {
		body: "Gibson",
		heading: "Gibson",
	},
});

export type AppColors = keyof typeof theme.colors;
