'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';

const Cart = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size={'icon'} variant={'ghost'}>
					<ShoppingCart />
				</Button>
			</SheetTrigger>
			<SheetContent className="z-[9999] min-w-[30%]">
				<SheetHeader>Cart</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default Cart;
