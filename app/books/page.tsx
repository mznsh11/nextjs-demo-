import { Suspense } from 'react';
import { getAllBooks, getAllAuthors } from '@/lib/data';
import BooksClient from '@/components/BooksClient';
import { delay } from '@/lib/delay';

export default async function BooksPage() {
  await delay(800); // Simulate a delay for loading data
  const books = getAllBooks();
  const authors = getAllAuthors();

  return (
   <Suspense fallback={<div>Loading...</div>}>
    <BooksClient initialBooks={books} authors={authors} />
    </Suspense>
  );
}
