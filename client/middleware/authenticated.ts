export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const authenticated = useState('authenticated');

    if (!authenticated.value)
        return navigateTo({ name: 'login' });
})