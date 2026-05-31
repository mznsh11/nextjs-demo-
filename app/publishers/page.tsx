import { getAllPublishers } from "@/lib/data";
import PublishersClient from "@/components/PublishersClient";
import { Suspense } from "react";
import { delay } from "@/lib/delay";

export default async function PublishersPage() {
  await delay(800); // Simulate a delay for loading data
  const publishers = getAllPublishers();
  
  return (
    <Suspense fallback={<div>Loading publishers...</div>}>
      <PublishersClient publishers={publishers} />
    </Suspense>
  );
}