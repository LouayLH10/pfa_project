import React, { Suspense } from 'react';
import Role from './role';

export default function RolePage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Role />
    </Suspense>
  );
}
