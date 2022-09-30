import { Breakpoint, BreakpointClass } from '../../../../utils/types/css';
import type { Values } from '../../../../utils/types';

export type BreakpointsMap = Record<Values<typeof Breakpoint>, number>;

export type Breakpoint = Values<typeof Breakpoint>;

export type BreakpointClass = Values<typeof BreakpointClass>;
