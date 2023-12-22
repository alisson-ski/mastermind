import { Colors } from "../color";

export enum AttemptResult {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  NONE = 'NONE'
}

export interface AttemptResultAndSequence {
  result: AttemptResult[],
  sequence: Array<Colors | null>
}