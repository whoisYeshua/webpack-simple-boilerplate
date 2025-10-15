import { Activity, createContext, Suspense, useContext, useState } from 'react'
import type { ReactNode } from 'react'

import * as styles from './Tabs.module.css'

interface TabsContextType {
  value: string
  onChange: (value: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider')
  }
  return context
}

interface TabsProperties {
  value: string
  onChange: (value: string) => void
  children: ReactNode
}

console.log(styles.tabs)

const Tabs = ({ value, onChange, children }: TabsProperties) => {
  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div className={styles.tabs}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabsListProperties {
  children: ReactNode
}

const TabsList = ({ children }: TabsListProperties) => {
  return <div className={styles['tabs-list']}>{children}</div>
}

interface TabProperties {
  value: string
  children: ReactNode
}

const Tab = ({ value, children }: TabProperties) => {
  const { value: activeValue, onChange } = useTabsContext()
  const isActive = activeValue === value

  return (
    <button
      type="button"
      className={`${styles.tab} ${isActive ? styles['tab-active'] : ''}`}
      onClick={() => onChange(value)}
    >
      {children}
    </button>
  )
}

interface TabsPanelProperties {
  value: string
  children: ReactNode
}

const TabsPanel = ({ value, children }: TabsPanelProperties) => {
  const [wasRendered, setWasRendered] = useState(false)
  const { value: activeValue } = useTabsContext()
  const isActive = activeValue === value

  if (isActive && !wasRendered) {
    setWasRendered(true)
  }

  if (!isActive && !wasRendered) return null

  return (
    <Activity mode={isActive ? 'visible' : 'hidden'}>
      <div className={styles['tabs-panel']}>
        <Suspense fallback={<div>Loading {value}...</div>}>{children}</Suspense>
      </div>
    </Activity>
  )
}

Tabs.List = TabsList
Tabs.Tab = Tab
Tabs.Panel = TabsPanel

export default Tabs
