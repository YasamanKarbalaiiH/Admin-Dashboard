import { useMemo } from "react";

export function useStatistics(data, config) {
  return useMemo(() => {
    const stats = {};
    Object.keys(config).forEach((key) => {
      const { field, value } = config[key];
      stats[key] = data.filter((item) => item[field] === value).length;
    });
    return stats;
  }, [data, config]);
}
