import * as React from 'react';
import { SvgAsset, SvgAssetProps } from './SvgAsset';
import {
  ndifWordmarkHorizontalColor,
  ndifWordmarkHorizontalBlack,
  ndifWordmarkHorizontalWhite,
  ndifWordmarkStackedColor,
  ndifWordmarkStackedBlack,
  ndifWordmarkStackedWhite,
} from './svg-data';

export interface NdifWordmarkProps extends SvgAssetProps {
  /** 'horizontal' — mark beside logotype (default); 'stacked' — mark above logotype. */
  layout?: 'horizontal' | 'stacked';
  /** 'color' for light backgrounds (default), 'black' / 'white' monochrome. */
  variant?: 'color' | 'black' | 'white';
}

const SVGS = {
  horizontal: {
    color: ndifWordmarkHorizontalColor,
    black: ndifWordmarkHorizontalBlack,
    white: ndifWordmarkHorizontalWhite,
  },
  stacked: {
    color: ndifWordmarkStackedColor,
    black: ndifWordmarkStackedBlack,
    white: ndifWordmarkStackedWhite,
  },
};

/** The NDIF wordmark lockup: logo mark plus "NDIF" logotype. */
export function NdifWordmark({
  layout = 'horizontal',
  variant = 'color',
  ...rest
}: NdifWordmarkProps) {
  return <SvgAsset svg={SVGS[layout][variant]} aria-label="NDIF" {...rest} />;
}
