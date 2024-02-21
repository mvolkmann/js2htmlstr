export declare type Attributes = Object<string, boolean | number | string>;

export declare type Child = string | number;

export declare type ContentFn = (
  attrs: Attributes | Children,
  children?: Children
) => string;

export declare type SelfClosingFn = (attrs?: Attributes) => string;
