import * as React from 'react';
import { SvgAsset, SvgAssetProps } from './SvgAsset';
import { inifLogoColor, inifLogoBlack, inifLogoWhite } from './svg-data';

export interface InifLogoProps extends SvgAssetProps {
  /** 'color' for light backgrounds (default), 'black' / 'white' monochrome. */
  variant?: 'color' | 'black' | 'white';
}

const SVGS = {
  color: inifLogoColor,
  black: inifLogoBlack,
  white: inifLogoWhite,
};

/** The INIF logo (JSON braces around a tokenizer token strip with a span annotation). */
export function InifLogo({ variant = 'color', ...rest }: InifLogoProps) {
  return <SvgAsset svg={SVGS[variant]} aria-label="INIF logo" {...rest} />;
}
