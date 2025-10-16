<template>
   
   <div>
    <div class="card">
        <div class="card-header">
            <h4>Student</h4>
            <RouterLink class="btn btn-primary float-end" to="/student/create">Add Student</RouterLink>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Create At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ student.id }}</td>
                        <td>{{ student.name }}</td>
                        <td>{{ student.course }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.phone }}</td>
                        <td>{{ student.created_at }}</td>
                        <td>
                        <!-- Nút edit/delete -->
                        <button class="btn btn-success btn-sm">Edit</button>
                        <button class="btn btn-danger btn-sm">Delete</button>
                         
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
const student = reactive({
    id: 0,
    name: 'Doan Van Do',
    course: 'Web Development',
    email: 'taquanfdoan212@gmail.com',
    phone: '0324233123',
    created_at: ' 2023-10-01'
});
</script>