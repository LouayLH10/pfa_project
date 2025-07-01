import React, { Suspense } from 'react';
import AddChap from './AddChap';

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <AddChap />
    </Suspense>
  );
}
