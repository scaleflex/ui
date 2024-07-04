export type StylableComponent<S extends string | string[] = undefined> = (S extends undefined
  ? Record<string, never>
  : {
      customProperties?: Partial<Record<S extends string ? S : S[number], string | undefined>>;
    }) & {
  className?: string;
};
