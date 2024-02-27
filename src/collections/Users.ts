import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
	auth: {
		verify: {
			generateEmailHTML: ({ token }) => {
				return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Magic link to log in.</a>`;
			},
		},
	},
	access: {
		read: () => true,
		create: () => true,
	},
	slug: 'users',
	fields: [
		{
			name: 'role',
			admin: {
				condition: () => false,
			},
			type: 'select',
			options: [
				{ label: 'Admin', value: 'admin' },
				{ label: 'User', value: 'user' },
			],
		},
	],
};
