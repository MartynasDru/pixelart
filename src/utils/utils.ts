export const joinTruthy = (items: Array<string | number | boolean | null | undefined>, delimiter = ' ') =>
    (items || []).filter(Boolean).join(delimiter);

