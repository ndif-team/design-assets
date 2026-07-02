import * as React from 'react';
import { NnbenchLogo } from 'ndif-brand';

export function Color() {
  return <NnbenchLogo width={150} />;
}

export function GradientNeedle() {
  return <NnbenchLogo variant="gradient-needle" width={150} />;
}

export function Monochrome() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <NnbenchLogo variant="black" width={130} />
      <div style={{ background: 'var(--ndif-slate)', padding: 16, borderRadius: 8 }}>
        <NnbenchLogo variant="white" width={130} />
      </div>
    </div>
  );
}

export function WithName() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontFamily: 'var(--ndif-font)' }}>
      <NnbenchLogo width={72} />
      <span style={{ color: 'var(--ndif-slate)', fontWeight: 600, fontSize: 28 }}>NNBench</span>
    </div>
  );
}
