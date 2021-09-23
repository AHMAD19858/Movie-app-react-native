
export const InitialState = [

]
export const Reducer = (state, { type, payload }) => {
    switch (type) {
        case "add":
            return [...state, {

                movieText: payload.movieText,
                overView: payload.overView,
                date: payload.date,
                image: payload.image

            }]
        default:
            return state
    }

}