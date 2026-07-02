import * as React from 'react';
import { NdifLogo } from 'ndif-brand';

export function Color() {
  return <NdifLogo width={140} />;
}

export function Monochrome() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <NdifLogo variant="black" width={120} />
      <div style={{ background: 'var(--ndif-slate)', padding: 16, borderRadius: 8 }}>
        <NdifLogo variant="white" width={120} />
      </div>
    </div>
  );
}

export function WhiteOnGradient() {
  return <NdifLogo variant="white-on-gradient" width={140} />;
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
      <NdifLogo width={48} />
      <NdifLogo width={96} />
      <NdifLogo width={160} />
    </div>
  );
}
