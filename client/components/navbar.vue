<script lang="ts" setup>
import { onMounted } from "vue";
const { loadSession } = useSession();
const { logout } = useAuth();
const router = useRouter();

const authenticated = useState("authenticated");

const data = reactive({
  userName: "",
});

onMounted(() => {
  data.userName = loadSession().name;
});

async function logOut() {
  try {
    const response = await logout();
  } catch (error: any) {
  } finally {
    router.push({ path: "/login" });
    authenticated.value = false;
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg text-bg-light p-0">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <p class="text-start p-2">{{ data.userName }}</p>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <p class="text-end p-2 cursor-pointer" @click="logOut">Logout</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
