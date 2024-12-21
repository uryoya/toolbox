export type Tool = {
  name: string;
  description: string;
  fn: (name: string) => Promise<string>;
};
