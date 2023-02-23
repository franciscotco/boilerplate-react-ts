
import webpackCommon from "../webpack.common";
import { type StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
		stories: ["../src/**/*.stories.@(ts|tsx)"],
		webpackFinal: async (config) => {
      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...webpackCommon.resolve?.alias
        }
      }
			return config;
		},
		typescript: {
			reactDocgen: 'react-docgen-typescript',
			reactDocgenTypescriptOptions: {
				tsconfigPath: '../tsconfig.json'
			}
		},
    core: {
      builder: "webpack5"
    }
};

export default config;
