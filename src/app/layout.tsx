import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/Navbar';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Digital Dukan',
	description: 'Your digital market place for high quality icons.',
	icons: './main.svg',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						disableTransitionOnChange
					>
						<Navbar />
						{children}
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}
