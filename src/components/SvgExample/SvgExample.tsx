/* eslint-disable import/no-duplicates */
import styles from './SvgExample.module.css'
import svgSrc from '@assets/images/svgr.svg?url'
import SvgComponent from '@assets/images/svgr.svg'

console.log(svgSrc)
console.log(SvgComponent)

const SvgExample = () => {
  return (
    <div>
      <h2>SvgExample</h2>
      <div className={styles['svg-background']} title="svg as background-image" />
      <img src={svgSrc} height="90" alt="svg as src for img tag" title="svg as src for img tag" />
      <div title="svg as React component">
        <SvgComponent height="90" />
      </div>
    </div>
  )
}

export default SvgExample
