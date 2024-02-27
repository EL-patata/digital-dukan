import Image from 'next/image';

const Logo = () => {
	return (
		<div className="bg-gradient-to-br from-primary via-rose-500 to-primary  h-10 w-10 grid place-items-center rounded-full">
			<Image src="./main.svg" width={28} height={28} alt="logo" />
		</div>
	);
};

export default Logo;
