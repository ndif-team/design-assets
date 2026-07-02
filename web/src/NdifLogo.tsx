import * as React from 'react';
import { SvgAsset, SvgAssetProps } from './SvgAsset';
import {
  ndifLogoColor,
  ndifLogoBlack,
  ndifLogoWhite,
  ndifLogoWhiteOnGradient,
} from './svg-data';

export interface NdifLogoProps extends SvgAssetProps {
  /**
   * 'color' — gradient logo for white/light backgrounds (default).
   * 'black' / 'white' — monochrome for light / dark backgrounds.
   * 'white-on-gradient' — white logo on its own gradient tile.
   */
  variant?: 'color' | 'black' | 'white' | 'white-on-gradient';
}

const SVGS = {
  color: ndifLogoColor,
  black: ndifLogoBlack,
  white: ndifLogoWhite,
  'white-on-gradient': ndifLogoWhiteOnGradient,
};

/** The NDIF logo mark (circles-and-lines network glyph). */
export function NdifLogo({ variant = 'color', ...rest }: NdifLogoProps) {
  return <SvgAsset svg={SVGS[variant]} aria-label="NDIF logo" {...rest} />;
}
