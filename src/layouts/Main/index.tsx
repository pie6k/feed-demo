import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface Props {
  children: ReactNode;
  title?: string;
}

export function MainLayout({
  children,
  title = 'This is the default title',
}: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav></nav>
      </header>
      {children}
    </div>
  );
}
