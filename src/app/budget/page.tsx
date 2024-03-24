'use client'
import { SelectChangeEvent, Tab, Tabs, useMediaQuery } from '@mui/material'
import styles from '../page.module.css'
import { useState } from 'react'
import MonthBudgetTable from '@/components/MonthBudgetTable'
import HistoricBudgetTable from '@/components/HistoricBudgetTable'

export default function Budget() {
  const [value, setValue] = useState(0)
  const isMobile = useMediaQuery('(max-width: 600px)')

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  } 

  // STYLES
  const titleStyle = {
    margin: '10px 0',
    color: 'black'
  }

  const tabsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px'
  }

  return (
    <main className={styles.main}>
      <h2 style={titleStyle}>Presupuesto</h2>
      <div>
        <div style={tabsStyle}>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={value}
            onChange={handleChangeTab}
            variant={isMobile ? 'fullWidth' : 'standard'}
          >
            <Tab label="Este mes" value={0} />
            <Tab label="Historial" value={1} />
          </Tabs>
        </div>
        <div>
          {value === 0 && <MonthBudgetTable />}
          {value === 1 && <HistoricBudgetTable/>}
        </div>
      </div>
    </main>
  )
}