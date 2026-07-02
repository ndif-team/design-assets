import * as React from 'react';
import { InifLogo } from 'ndif-brand';

export function Color() {
  return <InifLogo width={220} />;
}

export function Monochrome() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <InifLogo variant="black" width={180} />
      <div style={{ background: 'var(--ndif-slate)', padding: 16, borderRadius: 8 }}>
        <InifLogo variant="white" width={180} />
      </div>
    </div>
  );
}

export function WithName() {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'center', fontFamily: 'var(--ndif-font)' }}>
      <InifLogo width={110} />
      <span style={{ color: 'var(--ndif-slate)', fontWeight: 600, fontSize: 28 }}>INIF</span>
    </div>
  );
}
