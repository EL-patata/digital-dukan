import Logo from '@/components/Logo';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const page = () => {
	return (
		<MaxWidthWrapper className="grid place-items-center">
			<Logo />
			<h1 className="text-3xl font-bold w-[50vw] aspect-video">
				<span className="text-primary">404</span> Not found.
			</h1>
		</MaxWidthWrapper>
	);
};

export default page;
