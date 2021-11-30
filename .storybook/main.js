const path = require("path");

module.exports = {
		stories: ["../src/components/**/*.stories.tsx"],
		webpackFinal: async (config) => {
      config.resolve.alias = {
        "@src": path.resolve(__dirname, "../src/")
      }
			return config;
		},
		typescript: {
			reactDocgen: 'react-docgen-typescript',
			reactDocgenTypescriptOptions: {
				tsconfigPath: '../tsconfig.json'
			}
		}
};
