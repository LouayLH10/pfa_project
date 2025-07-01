import React, { Suspense } from 'react';
import AddChap from './addchap';

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <AddChap />
    </Suspense>
  );
}
