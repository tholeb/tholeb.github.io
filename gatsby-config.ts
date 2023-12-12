import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
	siteMetadata: {
		// You can overwrite values here that are used for the SEO component
		// You can also add new values here to query them like usual
		// See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.mjs
		siteTitle: `tholeb.fr`,
		siteTitleAlt: `Thomas LEBRETON - Portfolio`,
		siteHeadline: `Thomas LEBRETON - Portfolio`,
		siteUrl: `https://www.tholeb.fr`,
		siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
		siteImage: `/banner.jpg`,
		siteLanguage: `en`,
		author: `@tholeb`,
	},
	trailingSlash: `always`,
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-cara`,
			// See the theme's README for all available options
			options: {},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/ // See below to configure properly
				}
			}
		},
		{
			resolve: "gatsby-source-graphql",
			options: {
				typeName: "GitHub",
				fieldName: "github",
				url: "https://api.github.com/graphql",
				headers: {
					Authorization: `bearer ${process.env.GH_TOKEN}`
				},
				fetchOptions: {},
				// variables: {
				// 	username: "tholeb"
				// }
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Cara - @lekoarts/gatsby-theme-cara`,
				short_name: `Cara`,
				description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
				start_url: `/`,
				background_color: `#141821`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#f6ad55`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		// You can remove this plugin if you don't need it
		shouldAnalyseBundle && {
			resolve: `gatsby-plugin-webpack-statoscope`,
			options: {
				saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
				saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
				open: false,
			},
		},
	].filter(Boolean) as Array<PluginRef>,
}

export default config
