import type { IconGlyph } from '../types';

export interface MenuLink {
  id: string;
  icon?: IconGlyph;
  label: string;
  url: string;
}
