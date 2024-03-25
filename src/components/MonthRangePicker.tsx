import { KeyboardArrowRight } from '@mui/icons-material'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import '../styles.css'

export default function MonthRangePicker() {
  return (
    <DatePicker.RangePicker
      className='monthRangePicker'
      picker="month"
      placeholder={['Inicio', 'Fin']}
      lang="es"
      disabledDate={current => current && current.toDate() > new Date()}
      defaultValue={[dayjs().startOf('month'), dayjs().endOf('month')]}
      format={'MMM YY'}
      allowClear={false}
      variant="borderless"
      size="large"
      suffixIcon={null}
      separator={<KeyboardArrowRight />}
      allowEmpty={[false, false]}
      inputReadOnly
      style={{
        width: '200px',
        marginBottom: '5px',
        paddingBottom: 0,
        paddingLeft: 0,
        paddingTop: 0,
        height: '30px'
      }}
    />
  )
}
