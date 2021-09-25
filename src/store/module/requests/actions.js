export default {
    requests(context, request) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: request.coachId,
            email: request.email,
            message: request.message
        }
        console.log('*************')
        console.log(newRequest)
        console.log('*************')

        context.commit('requests', newRequest)
    }
}