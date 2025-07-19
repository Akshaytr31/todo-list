import { ref } from "vue";
import { defineStore } from "pinia";

import type Task from "../types/Task";
import type User from "@/types/User";
import api from "@/sevice/api";

import API_URLS from "@/api/endpoint";

export const useListStore = defineStore(
  "listStore",
  () => {
    const lists = ref<Task[]>([]);
    const users = ref<User[]>([]);

    const setTodoList = (data: Task): void => {
      lists.value.push(data);
    };

    const deleteList = (id: number) => {
      lists.value = lists.value.filter((item: Task) => item.id !== id);
    };

    const updateTodolist = (updatedTodoItem: Task): void => {
      lists.value = lists.value.map((item: Task) =>
        item.id === updatedTodoItem.id ? { ...item, ...updatedTodoItem } : item
      );
    };

    const fetchUsers = async (): Promise<void> => {
      try {
        const res = await api.get(API_URLS.getUsersList());
        if (Array.isArray(res.data)) {
          users.value = res.data;
        } else {
          console.error("Unexpected response format:", res.data);
        }
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    const clearAll = () => {
      lists.value = [];
    };

    return {
      lists,
      users,
      setTodoList,
      deleteList,
      updateTodolist,
      fetchUsers,
      clearAll
    };
  },
  {
    persist: true,
  }
);
