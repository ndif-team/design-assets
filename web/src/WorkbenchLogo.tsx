import * as React from 'react';
import { SvgAsset, SvgAssetProps } from './SvgAsset';
import {
  workbenchLogoColor,
  workbenchLogoBlack,
  workbenchLogoWhite,
} from './svg-data';

export interface WorkbenchLogoProps extends SvgAssetProps {
  /** 'color' for light backgrounds (default), 'black' / 'white' monochrome. */
  variant?: 'color' | 'black' | 'white';
}

const SVGS = {
  color: workbenchLogoColor,
  black: workbenchLogoBlack,
  white: workbenchLogoWhite,
};

/** The Workbench logo (gradient "W" over control knobs). */
export function WorkbenchLogo({ variant = 'color', ...rest }: WorkbenchLogoProps) {
  return <SvgAsset svg={SVGS[variant]} aria-label="Workbench logo" {...rest} />;
}
