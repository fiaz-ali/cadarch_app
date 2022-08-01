export const baseUrl = 'https://cadarch-server.herokuapp.com/api/'
export const googleMapsApiKey = 'AIzaSyDzJ6WB7K18zaMSsnEWLEkCZpyBnegQVB4'

//  signup / login on number
export const authenticateUserUrl = `${baseUrl}mobileUsers/authenticateUser`
//  verify OTP
export const verifyOtpUrl = `${baseUrl}mobileUsers/verifyOtp`
//  register User on name submission
export const registerUserUrl = `${baseUrl}mobileUsers/signup`
// add renovation
export const renovationUrl = `${baseUrl}renovation/addrenovation`
// add architecture
export const architectureUrl = `${baseUrl}architecture/addarchitecture`
// add construction
export const constructionUrl = `${baseUrl}construction/addconstruction`
// get news
export const newsUrl = `${baseUrl}news/loadallnews`
// get renovation orders
export const renovationOrdersUrl = `${baseUrl}renovation/getallpaginatedrenovations`
// get architectrure orders
export const architectureOrdersUrl = `${baseUrl}architecture/getallpaginatedarchitecture`
// get construction orders
export const constructionOrdersUrl = `${baseUrl}construction/getallpaginatedconstruction`
