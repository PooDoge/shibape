import { INITIAL_FILTER_VALUES } from 'views/LHD/utils/config'
import { Filters } from 'utils/types/lhd'

import { cloneDeep } from 'lodash'

// Helper function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const shouldDivideBy100 = (key: string): boolean => {
  return ['totalScore', 'health', 'ownership', 'concentration'].includes(key)
}

export const generateSearchParams = (values: Required<Filters>): string => {
  const differences: string[] = []

  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      if (key === 'tags' || key === 'chains') {
        if (values[key].length > 0) {
          differences.push(`${key}=` + values[key].join(','))
        }
        continue
      }
      const value = values[key as keyof Filters]
      const initialValue = INITIAL_FILTER_VALUES[key as keyof Filters]

      if (JSON.stringify(value) !== JSON.stringify(initialValue)) {
        const keyValuePairs = Object.entries(value)
          .map(([subKey, subValue]) => {
            if (shouldDivideBy100(key)) {
              subValue /= 100
            }
            return `${key}${capitalizeFirstLetter(subKey)}=${subValue}`
          })
          .join('&')

        differences.push(keyValuePairs)
      }
    }
  }
  return differences.join('&')
}

export const getFilterDiff = (values: Required<Filters>): Filters => {
  const differences: Filters = {}

  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      if (key === 'tags' || key === 'chains') {
        if (values[key].length > 0) {
          differences[key] = values[key]
        }
        continue
      }
      const value = values[key as keyof Filters]
      const initialValue = INITIAL_FILTER_VALUES[key as keyof Filters]

      if (JSON.stringify(value) !== JSON.stringify(initialValue)) {
        const keyValuePairs = Object.entries(value).map(([subKey, subValue]) => {
          return [subKey, subValue]
        })

        differences[key as keyof Filters] = Object.fromEntries(keyValuePairs)
      }
    }
  }
  return differences
}

export const queryStringToObject = (queryString: string): Required<Filters> => {
  const searchParams = new URLSearchParams(queryString)
  const result: any = cloneDeep(INITIAL_FILTER_VALUES)

  searchParams.forEach((value, key) => {
    let mainKey = key.endsWith('Min') || key.endsWith('Max') ? key.slice(0, -3) : key
    let subKey = key.endsWith('Min') || key.endsWith('Max') ? key.slice(-3).toLowerCase() : key

    if (result[mainKey]) {
      if (mainKey === 'tags' || mainKey === 'chains') {
        result[mainKey] = value.split(',')
      } else {
        let parsedValue = parseFloat(value)
        // if it's a decimal, multiply by 100
        if (parsedValue < 1) {
          parsedValue *= 100
        }
        result[mainKey][subKey] = parsedValue
      }
    }
  })

  return result
}
