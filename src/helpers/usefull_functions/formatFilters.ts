import { Filter, ApiFilters, ApiFilter } from "../../types";

const formatFilters = (filter: Filter): ApiFilters => {
  let newFilters: ApiFilters = [];

  for (const field in filter) {
    for (const operator in filter[field]) {
      newFilters.push({
        field,
        operator: operator as ApiFilter["operator"],
        value: filter[field][operator as ApiFilter["operator"]],
      });
    }
  }

  return newFilters;
};

export default formatFilters;
