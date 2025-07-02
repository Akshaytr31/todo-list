import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useListStore = defineStore(
  'listStore',
  () => {
    const lists = ref([])
    const users = ref([])

    const setTodoList = (data) => {
      lists.value.push(data)
    }

    const deleteList = (id) => {
      lists.value = lists.value.filter((item) => item.id !== id)
    }

    const updateTodolist = (updatedTodoItem) => {
      lists.value = lists.value.map((item) =>
        item.id === updatedTodoItem.id ? { ...item, ...updatedTodoItem } : item
      )
    }

    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        users.value = data
      } catch (err) {
        console.error('Failed to fetch users:', err)
      }
    }

    return {
      lists,
      users,
      setTodoList,
      deleteList,
      updateTodolist,
      fetchUsers
    }
  },
  {
    persist: true
  }
)
