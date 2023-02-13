<script lang="ts" setup>
const { login } = useAuth();
const router = useRouter();
const { saveSession } = useSession();
const authenticated = useState("authenticated", () => false);

const form = reactive({
  data: {
    email: "",
    password: "",
  },
  error: "",
  pending: false,
});

async function onSubmit() {
  try {
    form.error = "";
    form.pending = true;
    const loggedUser = await login(form.data.email, form.data.password);
    saveSession(loggedUser);
    authenticated.value = !authenticated.value;
    router.push({ path: "/dashboard" });
  } catch (error: any) {
    console.log(error);
    form.error = "Invalid email or password.";
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <div class="text-center">
    <main class="form-signin w-100 container-sm m-auto mt-4 mw-300">
      <h3>Smart Pump</h3>
      <p>
        Developed by
        <a
          href="https://www.linkedin.com/in/antonio-lucero-buch/?locale=en_US"
          target="_blank"
          >Antonio Lucero</a
        >
      </p>

      <p class="text-danger" v-if="form.error">
        {{ form.error }}
      </p>

      <form @submit.prevent="onSubmit">
        <h1 class="h3 mb-3 fw-normal">Please log in</h1>

        <div class="form-floating mt-1">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            required
            v-model="form.data.email"
          />
          <label for="email">Email address</label>
        </div>
        <div class="form-floating mt-1">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            required
            v-model="form.data.password"
          />
          <label for="password">Password</label>
        </div>

        <div class="mt-2">
          <button
            class="w-100 btn btn-lg btn-primary mt-1"
            type="submit"
            :disabled="form.pending"
          >
            Log in
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
