"use client";
import React from 'react';

import dynamic from 'next/dynamic'

// Utilisez dynamic pour charger le composant ApexCharts côté client uniquement
const Chart2 = dynamic(() => import('./Chart2Component'), { ssr: false })

export default Chart2;
