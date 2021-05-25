import React, { createContext, useContext } from "react"

const ChartContext = createContext()

export const useChartDimensions = () => useContext(ChartContext)


const Chart = ({ dimensions, children }) => {
  return (
    <ChartContext.Provider value={dimensions}>
      <svg className='Chart'
        width={dimensions.width}
        height={dimensions.height}
      >
        <g transform={`translate(${dimensions.marginLeft},${dimensions.marginTop})`}>
          {children}
        </g>
      </svg>
    </ChartContext.Provider>
  )
}

Chart.defaultProps = {
  dimensions: {}
}

export default Chart
