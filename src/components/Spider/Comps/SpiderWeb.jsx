import React from 'react'

const SpiderWeb = ({ allAxis, levelFactors, cfg, total }) => {


  return (
    <g>
      {levelFactors.map((lev, hI) => (
        <g key={`${lev}`}>
          {allAxis.map((d, i) => (

            < line className='Spider__line'
              key={`${lev}--${d}`}
              x2={lev * (1 - cfg.factor * (-Math.sin((i + 1) * cfg.radians / total)))}
              y2={lev * (1 - cfg.factor * (Math.cos((i + 1) * cfg.radians / total)))}
              x1={lev * (1 - cfg.factor * (-Math.sin(i * cfg.radians / total)))}
              y1={lev * (1 - cfg.factor * (Math.cos(i * cfg.radians / total)))}
              transform={`translate(${cfg.w / 2 - lev}, ${cfg.h / 2 - lev})`}
            />
          ))}
        </g>
      )
      )}
      {allAxis.map((d, i) => (
        <text className='Spider__Legend'
          key={`${d.slice(' ')[0]}`}
          dy={'11px'}
          transform={`translate(0, -10)`}
          x={cfg.w / 2 * (1 - cfg.factorLegend * Math.sin(-i * cfg.radians / total)) - 60 * Math.sin(-i * cfg.radians / total)}
          y={cfg.h / 2 * (1 - Math.cos(-i * cfg.radians / total)) - 20 * Math.cos(i * cfg.radians / total)}
        >
          {d}
        </text>
      ))
      }

    </g >
  )
}

export default SpiderWeb
