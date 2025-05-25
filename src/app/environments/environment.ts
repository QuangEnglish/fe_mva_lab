
export const environment = {
  SERVER_URL: './',
  API_VERSION: '1',
  API_SERVICE: 'cptn-service',
  API_SERVICE_VHKT: 'vhkt-service',
  pass_token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdGFmZkNvZGUiOiIyOTA0MjQiLCJhdXRoZW50aWNhdGlvbkRhdGUiOiIyMDI0LTAxLTE4VDE2OjIwOjU4LjIyMSswNzowMFtHTVQrMDc6MDBdIiwidXNlcl9uYW1lIjoiMjkwNDI0IiwiZnVsbE5hbWUiOiJWxakgRHV5IFF1YW5nIiwibG9jYWxlIjoidmkiLCJleHAiOjE4NjEwODk3MzcsInVzZXJJZCI6IjEwMzYzNjAzNSIsImVtYWlsIjoicXVhbmd2ZDExQHZpZXR0ZWwuY29tLnZuIiwic3RhdHVzIjoiMSIsImlhdCI6MTcwNTU2OTczN30.TeSSAFNoJgEA2imcMIQ2gC_ddpUMHusaTyL4SQmgVN9HHxcZdncnhAfbbYNE8nKgbWkGxY3qHu99zBDnTfgl4A',
  APP_VERSION: '1.0',
  production: false,
  useHash: false,
  hmr: false,
  cryptoKey: '7bwt+n638BNuTFEY',
  appCode: 'DTHT',
  pro: {
    theme: 'compact',
    menu: 'side',
    contentWidth: 'fluid',
    fixedHeader: true,
    autoHideHeader: true,
    fixSiderbar: true,
    onlyIcon: false,
    colorWeak: false,
  },
  BASE_API_URI: {
    // BASE_SERVICE_API: 'http://10.254.144.144:8063/',
    // CLIENT_ADDRESS:    'http://10.254.144.144:8181',
    BASE_SERVICE_API: 'http://localhost:8761/',
    // BASE_SERVICE_API: 'http://10.254.144.145:8761/',
    CLIENT_ADDRESS:    'http://localhost:4200',
    SSO_ADDRESS:       'https://10.255.58.201:8001/sso',
  },
};

