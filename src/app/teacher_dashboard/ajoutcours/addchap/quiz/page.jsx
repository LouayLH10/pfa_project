import React, { Suspense } from 'react';
import Quiz from './Quiz';

export default function page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Quiz />
    </Suspense>
  );
}
