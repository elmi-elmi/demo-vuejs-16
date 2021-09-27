export default {
    requests(context, request) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: request.coachId,
            email: request.email,
            message: request.message
        }
        context.commit('requests', newRequest)
    }
}