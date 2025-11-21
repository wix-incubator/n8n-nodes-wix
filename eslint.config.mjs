import { config } from '@n8n/node-cli/eslint';

export default [
	...config.slice(0, -1),
	{
		...config[config.length - 1],
		rules: {
			...(config[config.length - 1]?.rules || {}),
			'import-x/no-unresolved': [
				'error',
				{
					ignore: ['^n8n-workflow'],
				},
			],
		},
	},
];
