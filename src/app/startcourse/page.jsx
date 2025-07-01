import React, { Suspense } from 'react';
import Startcourse from './Startcourse';

export default function RolePage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Startcourse />
    </Suspense>
  );
}
