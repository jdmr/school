<template>
    <main
        class="container mx-auto max-w-prose flex flex-col justify-center items-center min-h-screen p-2"
    >
        <h1 class="text-5xl mb-4">Teacher Add</h1>
        <form
            action="addTeacher"
            method="post"
            class="flex flex-col gap-4 w-full"
            @submit.prevent="addTeacher"
        >
            <div class="flex flex-col gap-1">
                <label for="firstName">First Name</label>
                <input
                    id="name"
                    v-model="teacher.firstName"
                    type="text"
                    name="firstName"
                    class="text-gray-700 p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div class="flex flex-col gap-1">
                <label for="lastName">Last Name</label>
                <input
                    id="lastName"
                    v-model="teacher.lastName"
                    type="text"
                    name="lastName"
                    class="text-gray-700 p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <button
                class="mt-4 flex items-center justify-center gap-1 bg-gray-100 text-gray-700 p-2 rounded-md hover:bg-gray-200 transition duration-200 ease-in-out"
            >
                <i class="i-mdi:plus h-6 w-6"></i>
                <span>Add Teacher</span>
            </button>
        </form>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Teacher } from '../models/school'
import { useRouter } from 'vue-router'

const router = useRouter()
const teacher = ref({} as Teacher)

const addTeacher = () => {
    const teachersString = sessionStorage.getItem('teachers')
    if (!teachersString) {
        sessionStorage.setItem('teachers', JSON.stringify([teacher.value]))
    } else {
        const teachers = JSON.parse(teachersString)
        teachers.push(teacher.value)
        sessionStorage.setItem('teachers', JSON.stringify(teachers))
    }
    router.go(-1)
}
</script>
