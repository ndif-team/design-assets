import * as React from 'react';
import { SvgAsset, SvgAssetProps } from './SvgAsset';
import { nnsightLogoColor, nnsightLogoBlack, nnsightLogoWhite } from './svg-data';

export interface NnsightLogoProps extends SvgAssetProps {
  /** 'color' for light backgrounds (default), 'black' / 'white' monochrome. */
  variant?: 'color' | 'black' | 'white';
}

const SVGS = {
  color: nnsightLogoColor,
  black: nnsightLogoBlack,
  white: nnsightLogoWhite,
};

/** The nnsight library logo. */
export function NnsightLogo({ variant = 'color', ...rest }: NnsightLogoProps) {
  return <SvgAsset svg={SVGS[variant]} aria-label="nnsight logo" {...rest} />;
}
