import { getPayloadClient } from '../../../get-payload';

type Props = {
	params: {
		[key: string]: string | string[] | undefined;
	};
};

const Page = async ({ params }: Props) => {
	const id = params.id as string;

	const payload = await getPayloadClient();

	const product = await payload.findByID({
		collection: 'products',
		id,
		depth: 1,
	});

	return <div>{JSON.stringify(product)}</div>;
};

export default Page;
