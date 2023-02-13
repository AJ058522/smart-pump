<script lang="ts" setup>
import { onMounted } from "vue";
const router = useRouter();

onMounted(() => {
  router.push({ path: "/login" });
});
</script>

<template>
  <div class="text-center">
    <main class="form-signin w-100 m-auto mt-4">
      <h1>Smart Pump</h1>
      <div class="d-flex justify-content-center mt-4">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </main>
  </div>
</template>
