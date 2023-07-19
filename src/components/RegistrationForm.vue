<template>


      <div>
    <h2>Registration Form</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label for="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" v-model="formData.employeeId" required>
      </div>
      <div>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="formData.dateOfBirth" required>
      </div>
      <div>
        <label for="department">Department:</label>
        <input type="text" id="department" v-model="formData.department" required>
      </div>
      <div>
        <label for="experience">Experience:</label>
        <input type="text" id="experience" v-model="formData.experience" required>
      </div>
      <div>
        <label for="skills">Skills:</label>
        <input type="text" id="skills" v-model="formData.skills" required>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>

     
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        employeeId: '',
        dateOfBirth: '',
        department: '',
        experience: '',
        skills: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:9000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          alert('Registration successful!');
          this.formData = {}; // Clear the form
        } else {
          alert('Registration failed!');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed!');
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}
</style>
