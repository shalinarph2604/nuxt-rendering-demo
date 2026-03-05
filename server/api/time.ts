export default defineEventHandler(() => {
    const now = new Date()

    const time = now.toLocaleTimeString()

    return {
        time
    }
})