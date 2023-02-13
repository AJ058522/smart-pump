<script lang="ts" setup>
import { onMounted } from "vue";
import { useUser } from "~~/composables/user/user";

onMounted(() => {
  getUserFormData();
});

const { getUserData, updateUserData } = useUser();
const { loadSession } = useSession();
let userId: number = loadSession().userdata._id;

const form = reactive({
  balance: 0,
  data: {
    age: 0,
    first_name: "",
    last_name: "",
    company: "",
    phone: "",
    address: "",
  },
  error: "",
  loading: false,
  pending: false,
});

async function getUserFormData() {
  form.loading = true;
  try {
    const response: any = await getUserData(userId);
    form.balance = response.balance;
    form.data.age = response.age;
    form.data.first_name = response.name.first;
    form.data.last_name = response.name.last;
    form.data.company = response.company;
    form.data.phone = response.phone;
    form.data.address = response.address;
  } catch (error: any) {
  } finally {
    form.loading = false;
  }
}

async function onSubmit() {
  try {
    form.error = "";
    form.pending = true;
    const updatedUser = await updateUserData(userId, form.data);
    getUserFormData();
  } catch (error: any) {
    form.error = error;
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <div class="text-center">
    <main class="form-signin w-100 container-sm m-auto mt-4 mw-300">
      <h3>Balance: {{ form.balance }}</h3>

      <p class="text-danger" v-if="form.error">
        {{ form.error }}
      </p>

      <div v-if="form.loading" class="mt-4">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <form @submit.prevent="onSubmit" v-if="!form.loading">
        <h1 class="h3 mb-3 fw-normal">User Data</h1>

        <div class="form-floating mt-1">
          <input
            type="number"
            class="form-control"
            id="age"
            required
            v-model="form.data.age"
          />
          <label for="age">Age</label>
        </div>
        <div class="form-floating mt-1">
          <input
            type="text"
            class="form-control"
            id="first_name"
            placeholder="First name"
            required
            v-model="form.data.first_name"
          />
          <label for="first_name">First name</label>
        </div>
        <div class="form-floating mt-1">
          <input
            type="text"
            class="form-control"
            id="last_name"
            placeholder="Last name"
            required
            v-model="form.data.last_name"
          />
          <label for="last_name">Last name</label>
        </div>
        <div class="form-floating mt-1">
          <input
            type="text"
            class="form-control"
            id="company"
            placeholder="Company"
            required
            v-model="form.data.company"
          />
          <label for="company">Company</label>
        </div>
        <div class="form-floating mt-1">
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Phone"
            required
            v-model="form.data.phone"
          />
          <label for="phone">Phone</label>
        </div>
        <div class="form-floating mt-1">
          <textarea
            class="form-control"
            name="address"
            id="address"
            placeholder="Address"
            required
            v-model="form.data.address"
            cols="30"
            rows="30"
          >
          </textarea>
          <label for="address">Address</label>
        </div>

        <div class="mt-2">
          <button
            class="w-100 btn btn-lg btn-primary mt-1"
            type="submit"
            :disabled="form.pending"
          >
            Guardar
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<style scoped>
.mw-300 {
  max-width: 300px;
}
</style>
