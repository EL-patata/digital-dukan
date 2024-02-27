'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Product as ProductType } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';

type Props = { product: ProductType };

const Product = ({ product }: Props) => {
	const validUrls = product.images
		.map(({ image }) => (typeof image === 'string' ? image : image.url))
		.filter(Boolean) as string[];

	return (
		<div className="flex flex-col gap-1">
			<Carousel className="w-full max-w-xs group">
				<CarouselContent>
					{validUrls.map((image, index) => (
						<CarouselItem key={index}>
							<Image
								alt={`image product image`}
								className="object-cover object-center rounded-lg"
								width={400}
								height={300}
								src={image}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious
					variant={`secondary`}
					className="left-2  transition-all duration-150 z-50 active:scale-90 opacity-0 group-hover:opacity-100 disabled:hidden"
				/>
				<CarouselNext
					variant={`secondary`}
					className="right-2   transition-all duration-150 z-50 active:scale-90 opacity-0 group-hover:opacity-100 disabled:hidden"
				/>
			</Carousel>
			<Link href={`/products/${product.id}`}>
				<p className="font-semibold text-sm">{product.name}</p>
				<p className="text-muted-foreground text-sm capitalize">
					{product.category.replace('_', ' ')}
				</p>
				<p className="font-semibold text-sm">
					{new Intl.NumberFormat('en-IN', {
						style: 'currency',
						currency: 'USD',
					}).format(product.price)}
				</p>
			</Link>
		</div>
	);
};

export default Product;
