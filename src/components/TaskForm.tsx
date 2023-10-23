import React from 'react'

function TaskForm():JSX.Element {
  return (
    <form>
        <input type="text" placeholder='ป้อนงานของคุณ'/>
        <button type='submit'>บันทึก</button>
    </form>
  )
}

export default TaskForm