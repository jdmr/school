<template>
    <div
        class="container mx-auto max-w-prose p-2 min-h-screen flex flex-col gap-4 items-center justify-center"
    >
        <h1 class="text-5xl tracking-widest">School</h1>
        <div class="flex flex-col gap-4 w-full">
            <div>
                <h2 class="text-3xl text-left">Courses</h2>
                <div class="flex flex-col gap-1 mt-2">
                    <label for="courseName"
                        >Course Name (E.g. English 101)</label
                    >
                    <div class="grid grid-cols-[1fr_auto] gap-1">
                        <input
                            id="courseName"
                            v-model="courseName"
                            type="text"
                            class="border border-gray-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:ring-2 hover:ring-blue-300 transition duration-200 ease-in-out"
                        />
                        <button
                            class="bg-blue-500 text-white rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 hover:ring-2 hover:ring-blue-300 transition duration-200 ease-in-out"
                        >
                            <i class="i-mdi:plus h-6 w-6"></i>
                        </button>
                    </div>
                </div>
                <ul class="flex flex-col gap-2">
                    <li v-for="course in courses" :key="course.id">
                        {{ course.name }}
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="text-3xl text-left">Teachers</h2>
                <ul class="flex flex-col gap-2">
                    <li v-for="teacher in teachers" :key="teacher.id">
                        {{ teacher.firstName }} {{ teacher.lastName }}
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="text-3xl text-left">Students</h2>
                <ul class="flex flex-col gap-2">
                    <li v-for="student in students" :key="student.id">
                        {{ student.firstName }} {{ student.lastName }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Course, Teacher, Student } from './models/school'

const courses = ref([] as Course[])
const teachers = ref([] as Teacher[])
const students = ref([] as Student[])

const courseName = ref('')
</script>
