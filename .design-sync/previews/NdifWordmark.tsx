import * as React from 'react';
import { NdifWordmark } from 'ndif-brand';

export function Horizontal() {
  return <NdifWordmark width={280} />;
}

export function Stacked() {
  return <NdifWordmark layout="stacked" width={160} />;
}

export function Monochrome() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <NdifWordmark variant="black" width={220} />
      <div style={{ background: 'var(--ndif-slate)', padding: 16, borderRadius: 8 }}>
        <NdifWordmark variant="white" width={220} />
      </div>
    </div>
  );
}

export function OnGradient() {
  return (
    <div style={{ background: 'var(--ndif-gradient)', padding: 24, borderRadius: 8 }}>
      <NdifWordmark variant="white" width={260} />
    </div>
  );
}
