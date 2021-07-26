const SERVER_ADRESS = process.env.SERVER_ADRESS || 'http://localhost:4000'

const locationUri = `${SERVER_ADRESS}/location`

export {
    SERVER_ADRESS,
    locationUri
}
