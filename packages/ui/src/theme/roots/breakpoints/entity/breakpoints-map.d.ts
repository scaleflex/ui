import { Breakpoint } from '../../../../utils/types/css';
import type { Values } from '../../../../utils/types';

const Breakpoint = {};

export type BreakpointsMap = Record<Values<typeof Breakpoint>, number>;
