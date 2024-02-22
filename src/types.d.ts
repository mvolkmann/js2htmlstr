export declare type Attributes = Object<string, boolean | number | string>;

export declare type Child = string | number;

export declare type ContentFn = (
  attrs: Attributes | Children,
  children?: Children
) => string;

export declare type SelfClosingFn = (attrs?: Attributes) => string;

// This type is used in the return value of the `isValid` function.
export declare type Message = {
  column: number;
  context?: any;
  line: number;
  message: string;
  offset: number;
  ruleId: string;
  ruleUrl?: string;
  selector: string | null;
  severity: number;
  size: number;
};

// This type is used in the return value of the `isValid` function.
export declare type Result = {
  errorCount: number;
  filePath: string;
  messages: Message[];
  source: string | null;
  warningCount: number;
};

// This type is used in the return value of the `isValid` function.
export declare type Report = {
  errorCount: number;
  results: Result[];
  valid: boolean;
  warningCount: number;
};
