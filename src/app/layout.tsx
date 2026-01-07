import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KOMACAT (KOMA) — Educational ERC-20 Token on Arbitrum",
  description: "KOMACAT is an educational ERC-20 token experiment deployed on Arbitrum blockchain. Learn about token deployment, liquidity provisioning, and blockchain fundamentals through this transparent educational project.",
  keywords: [
    "KOMACAT",
    "KOMA",
    "ERC-20 token",
    "Arbitrum",
    "educational token",
    "cryptocurrency",
    "blockchain education",
    "Ethereum token",
    "smart contract",
    "tokenomics",
    "DeFi",
    "liquidity pool",
    "Uniswap",
    "Arbitrum One",
    "crypto education",
    "token deployment",
    "transparent experiment"
  ],
  
  openGraph: {
    title: "KOMACAT (KOMA) — Educational ERC-20 Token on Arbitrum",
    description: "Educational ERC-20 token experiment on Arbitrum blockchain. Transparent token deployment demonstration.",
    type: "website",
    url: "https://komacat.vercel.app/",
    siteName: "KOMACAT Educational Token",
    images: [
      {
        url: "https://komacat.vercel.app/_next/static/media/komacat.3fc90614.png",
        width: 1200,
        height: 630,
        alt: "KOMACAT Educational ERC-20 Token",
      },
    ],
    locale: "en_US",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "KOMACAT (KOMA) — Educational ERC-20 Token on Arbitrum",
    description: "Learn blockchain through transparent ERC-20 token experimentation on Arbitrum",
    images: ["https://komacat.vercel.app/_next/static/media/komacat.3fc90614.png"],
    creator: "@CorporationKoma",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  applicationName: "KOMACAT Educational Token",
  authors: [{ name: "KOMACAT Education Team" }],
  creator: "KOMACAT Education Team",
  publisher: "KOMACAT Education Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
 
  
  metadataBase: new URL('https://komacat.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  
  category: "cryptocurrency",
  
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CryptoCurrency',
  'name': 'KOMACAT',
  'symbol': 'KOMA',
  'description': 'Educational ERC-20 token experiment on Arbitrum blockchain',
  'url': 'https://komacat.vercel.app/',
  'image': 'https://komacat.vercel.app/_next/static/media/komacat.3fc90614.png',
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://komacat.vercel.app/'
  },
  'creator': {
    '@type': 'IndividualPerson',
    'name': 'CorporationKoma'
  },
  'keywords': 'ERC-20, Arbitrum, educational token, blockchain, cryptocurrency',
  'inLanguage': 'en-US',
  'isAccessibleForFree': true,
  'license': 'https://creativecommons.org/licenses/by/4.0/'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/komacat.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/komacat.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/komacat.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/komacat.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <meta name="token:blockchain" content="Arbitrum" />
        <meta name="token:standard" content="ERC-20" />
        <meta name="token:contract-address" content="0xCDb23CF7B56328F304D61cb91F2a8df076c30839" />
        <meta name="token:total-supply" content="1000000" />
        <meta name="token:symbol" content="KOMA" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}