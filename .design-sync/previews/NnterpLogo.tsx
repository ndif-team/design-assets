import * as React from 'react';
import { NnterpLogo } from 'ndif-brand';

export function Color() {
  return <NnterpLogo width={140} />;
}

export function Monochrome() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <NnterpLogo variant="black" width={120} />
      <div style={{ background: 'var(--ndif-slate)', padding: 16, borderRadius: 8 }}>
        <NnterpLogo variant="white" width={120} />
      </div>
    </div>
  );
}

export function WithName() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontFamily: 'var(--ndif-font)' }}>
      <NnterpLogo width={64} />
      <span style={{ color: 'var(--ndif-slate)', fontWeight: 600, fontSize: 28 }}>NNterp</span>
    </div>
  );
}
