export const useSession = () => {

    const saveSession = (userData: any) => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    const loadSession = () => {
        let userData: any = localStorage.getItem("userData");
        return JSON.parse(userData);
    }

    return {
        saveSession,
        loadSession
    }
}