export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://ape-swap-api.herokuapp.com'
export const apiV2BaseUrl = process.env.NEXT_PUBLIC_API_V2_BASE_URL || 'https://api-v2.apeswap.finance'
export const moonPayBaseUrl =
  process.env.NEXT_PUBLIC_MOONPAY_BASE_URL ||
  'https://buy-staging.moonpay.io?apiKey=pk_test_ofxbUiq0BDNvCBwRbO5mHjG7gKBKLWY2&colorCode=%23ffb300'

export const mailChimpUrl = `https://finance.us10.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`