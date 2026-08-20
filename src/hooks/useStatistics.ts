import { useMemo } from "react";

type StatisticsConfig<T> = {
  [key: string]: {
    field: keyof T;
    value: T[keyof T];
  };
};

export function useStatistics<T extends Record<string, unknown>>(
  data: T[],
  config: StatisticsConfig<T>,
) {
  return useMemo(() => {
    const stats: Record<string, number> = {};

    Object.keys(config).forEach((key) => {
      const { field, value } = config[key];

      stats[key] = data.filter((item) => item[field] === value).length;
    });

    return stats;
  }, [data, config]);
}
