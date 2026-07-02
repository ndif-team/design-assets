import * as React from 'react';
import { SvgAsset, SvgAssetProps } from './SvgAsset';
import { nnterpLogoColor, nnterpLogoBlack, nnterpLogoWhite } from './svg-data';

export interface NnterpLogoProps extends SvgAssetProps {
  /** 'color' for light backgrounds (default), 'black' / 'white' monochrome. */
  variant?: 'color' | 'black' | 'white';
}

const SVGS = {
  color: nnterpLogoColor,
  black: nnterpLogoBlack,
  white: nnterpLogoWhite,
};

/** The NNterp library logo (three signals converging into one gradient arrow). */
export function NnterpLogo({ variant = 'color', ...rest }: NnterpLogoProps) {
  return <SvgAsset svg={SVGS[variant]} aria-label="NNterp logo" {...rest} />;
}
