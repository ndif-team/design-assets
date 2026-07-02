import * as React from 'react';
import { SvgAsset, SvgAssetProps } from './SvgAsset';
import {
  nnbenchLogoColor,
  nnbenchLogoAltColor,
  nnbenchLogoBlack,
  nnbenchLogoWhite,
} from './svg-data';

export interface NnbenchLogoProps extends SvgAssetProps {
  /**
   * 'color' — gradient dial, slate needle (default).
   * 'gradient-needle' — slate dial, gradient needle.
   * 'black' / 'white' — monochrome for light / dark backgrounds.
   */
  variant?: 'color' | 'gradient-needle' | 'black' | 'white';
}

const SVGS = {
  color: nnbenchLogoColor,
  'gradient-needle': nnbenchLogoAltColor,
  black: nnbenchLogoBlack,
  white: nnbenchLogoWhite,
};

/** The NNBench logo (speedometer dial with an NNsight N-arrow needle). */
export function NnbenchLogo({ variant = 'color', ...rest }: NnbenchLogoProps) {
  return <SvgAsset svg={SVGS[variant]} aria-label="NNBench logo" {...rest} />;
}
