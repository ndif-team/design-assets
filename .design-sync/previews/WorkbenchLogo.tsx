import * as React from 'react';
import { WorkbenchLogo } from 'ndif-brand';

export function Color() {
  return <WorkbenchLogo width={120} />;
}

export function Monochrome() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <WorkbenchLogo variant="black" width={100} />
      <div style={{ background: 'var(--ndif-slate)', padding: 16, borderRadius: 8 }}>
        <WorkbenchLogo variant="white" width={100} />
      </div>
    </div>
  );
}

export function WithName() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontFamily: 'var(--ndif-font)' }}>
      <WorkbenchLogo width={56} />
      <span style={{ color: 'var(--ndif-slate)', fontWeight: 600, fontSize: 28 }}>NDIF Workbench</span>
    </div>
  );
}
