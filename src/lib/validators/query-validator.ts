import { z } from 'zod';

export const QueryValidator = z.object({
	category: z.enum(['icons', 'ui_kits']).optional(),
	sort: z.enum(['asc', 'desc']).optional(),
	limit: z.number().optional(),
	filterProduct: z.string().optional(),
});

export type TQueryValidator = z.infer<typeof QueryValidator>;
