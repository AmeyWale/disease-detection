
import React from 'react'

export default function Spinner() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block", shapeRendering: "auto", width:"50px", height:"50px"}} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#13c0df" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
</circle>
</svg>
  )
}
