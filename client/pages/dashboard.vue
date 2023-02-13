<script lang="ts" setup>
import { onMounted } from "vue";
const { loadSession } = useSession();

definePageMeta({
  middleware: ["authenticated"],
});
const authenticated = useState("authenticated");

const data = reactive({
  error: "",
  loading: false,
  pending: false,
});

onMounted(() => {});

async function onSubmit() {}
</script>

<template>
  <Navbar />
  <div class="text-center">
    <main class="form-signin w-50 m-auto my-4 mw-50">
      <div v-if="data.loading" class="mt-4">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@media (max-width: 900px) {
  .mw-50 {
    min-width: 90%;
  }
}
</style>
