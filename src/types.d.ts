export declare type ContentFn = (
  attrs: Attributes | Children,
  children?: Children
) => string;

export declare type SelfClosingFn = (attrs?: Attributes) => string;

export declare type StringToAny = {[key: string]: any};

export declare type StringToString = {[key: string]: string};
