export default {
    async requests(context, payload) {
        const newRequest = {
            email: payload.email,
            message: payload.message
        }
        const response = await fetch(`https://vue-http-demo-ccafc-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = response.json();
        if (!response.ok) {
            const error = new Error(responseData.message) || 'Field to send request';
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;

        context.commit('requests', newRequest)
    },

    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;

        const response = await fetch(`https://vue-http-demo-ccafc-default-rtdb.firebaseio.com/requests/${coachId}.json`);
        const responseData = await response.json();

        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                email: responseData[key].email,
                message: responseData[key].message
            }
            console.log(request)

            requests.push(request)
        }

        context.commit('setRequeset', requests)

    }
}