type EnumKey = number | string;

type EnumValue = number | string;

type EnumRecord = Record<EnumKey, EnumValue>;

export type EnumKeys<T extends EnumRecord> = keyof T;
export type Enum<T extends EnumRecord> = T[keyof T];

// Example: type MonthLabel = Enum<typeof MONTHS>;
