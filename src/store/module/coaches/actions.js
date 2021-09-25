export default {
    registerCoach(context, data) {
        const dataForm = {
            id: context.rootGetters.userId,
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            hourlyRate: data.rate,
            areas: data.areas,
        }
        context.commit('registerCoach', dataForm)
    }
}