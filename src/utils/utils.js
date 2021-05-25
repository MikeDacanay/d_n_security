import { useEffect, useState, useRef } from "react"
import _ from 'lodash'
import * as d3 from 'd3'
import ResizeObserver from "resize-observer-polyfill"

export const callAccessor = (accessor, d, i) => (
  typeof accessor === "function" ? accessor(d, i) : accessor
)

export const combineChartDimensions = dimensions => {
  let parsedDimensions = {
    marginTop: 40,
    marginRight: 30,
    marginBottom: 40,
    marginLeft: 75,
    ...dimensions
  }

  return {
    ...parsedDimensions,
    boundedHeight: Math.max(parsedDimensions.height - parsedDimensions.marginTop - parsedDimensions.marginBottom, 0),
    boundedWidth: Math.max(parsedDimensions.width - parsedDimensions.marginLeft - parsedDimensions.marginRight, 0)
  }
}

export const useChartDimensions = passedSettings => {
  const ref = useRef()
  const dimensions = combineChartDimensions(passedSettings)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (dimensions.width && dimensions.height) return [ref, dimensions];

    const element = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) return
      if (!entries.length) return

      const entry = entries[0]

      if (width !== entry.contentRect.width) setWidth(entry.contentRect.width)
      if (height !== entry.contentRect.height) setHeight(entry.contentRect.height)
    })

    resizeObserver.observe(element)

    return () => resizeObserver.unobserve(element)
  }, [passedSettings, height, width, dimensions])

  const newSettings = combineChartDimensions({
    ...dimensions,
    width: dimensions.width || width,
    height: dimensions.height || height,
  })

  return [ref, newSettings]
}

// FIXME - don't think I'm using this
let lastId = 0;
export const useUniqueId = (prefix = '') => {
  lastId++
  return [prefix, lastId].join('-')
}


/**
------------------------------
Radar Chart utils
------------------------------
*/

export function flatMapDeepArray(collection, fn) {
  return _.flatMapDeep(collection, fn)
}
export function forEachArray(collection, fn) {
  return _.forEach(collection, fn)
}
export function radiusScales(variables, domainMax, radius) {
  const res = {}
  _.forEach(variables, ({ key }) => {
    const scale = d3.scaleLinear().domain([0, domainMax]).range([0, radius])
    res[key] = scale
  })
  return res;
}

export function radarPoints(data, scales, offsetAngles) {
  const allVariablesKeys = data.variables.map(variable => variable.key)
  return data.sets.map(({ key, values }) => {
    const points = []
    _.forEach(values, (value, variableKey) => {
      const scale = scales[variableKey]
      const offsetAngle = offsetAngles[variableKey]
      if (scale === undefined || offsetAngle === undefined) {
        return
      }

      const x = scale(value) * Math.cos(offsetAngle / Math.PI * 2)
      const y = scale(value) * Math.sin(offsetAngle / Math.PI * 2)

      const point = {
        x,
        y,
        value,
        setKey: key,
        variableKey,
        key: `${key}--${variableKey}`
      }
      points.push(point)
    });
    const sortedPoints = _.sortBy(points, point => {
      const pointVariableKey = point.variableKey;
      return _.indexOf(allVariablesKeys, pointVariableKey)
    })

    return { setKey: key, points: sortedPoints }
  });
}

