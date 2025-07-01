"use client";

import dynamic from 'next/dynamic'

// Utilisez dynamic pour charger le composant ApexCharts côté client uniquement
const Chart1 = dynamic(() => import('./Chart1Component'), { ssr: false })
export default Chart1;
