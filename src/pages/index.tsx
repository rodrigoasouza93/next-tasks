import type { NextPage } from 'next'
import { useState } from 'react'

import { Form } from '../components/form/Form'
import { List } from '../components/list/List'
import { Content } from '../components/template/Content'
import { Header } from '../components/template/Header'
import { tasksList } from '../data/mock'
import { Task } from '../model/Task'
import { TasksList } from '../model/TasksList'

const Home: NextPage = () => {
  const [taks, setTasks] = useState(tasksList);

  function onChange(newTasks: TasksList) {
    setTasks(newTasks);
  }

  function newTaskCreated(newTask: Task) {
    setTasks(taks.addTask(newTask));
  }

  return (
    <div className={`
      flex flex-col h-screen
      bg-gray-300
    `}>
      <Header>
        <Form newTaskCreated={newTaskCreated} />
      </Header>
      <Content>
        <List tasks={taks} onChange={onChange} />
      </Content>
    </div>
  )
}

export default Home
