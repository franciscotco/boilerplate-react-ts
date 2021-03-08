const path = require("path");

module.exports = {
		stories: ["../src/components/**/*.stories.tsx"],
		webpackFinal: async (config, { configType }) => {
			config.resolve.modules = [
			  path.resolve(__dirname, "../src"),
			  "../node_modules",
			]

			return config;
		},
		typescript: {
			reactDocgen: 'react-docgen-typescript',
			reactDocgenTypescriptOptions: {
				tsconfigPath: '../tsconfig.json'
			}
		}
};
