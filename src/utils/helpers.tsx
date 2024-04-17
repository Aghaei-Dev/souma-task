export const lengthChecker = (string: string, length: number = 11) =>
  string.length > length ? `${string.slice(0, length)} ...` : string
