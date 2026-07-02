import * as React from 'react';

export interface SvgAssetProps {
  /** Rendered width (CSS length or number of px). Height follows the asset's aspect ratio. */
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
  /** Accessible label for the asset. */
  'aria-label'?: string;
}

/** Internal: renders an embedded brand SVG at a given width, preserving aspect ratio. */
export function SvgAsset({
  svg,
  width = 120,
  className,
  style,
  'aria-label': ariaLabel,
}: SvgAssetProps & { svg: string }) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={className ? `ndif-asset ${className}` : 'ndif-asset'}
      style={{ display: 'inline-block', lineHeight: 0, width, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
