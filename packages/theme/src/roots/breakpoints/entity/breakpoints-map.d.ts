import { Breakpoint } from '@sfx-ui/utils/types/css';
import type { Values } from '@sfx-ui/utils/types';

const Breakpoint = {};

export type BreakpointsMap = Record<Values<typeof Breakpoint>, number>;
