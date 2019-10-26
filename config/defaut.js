// node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"

module.exports = {
    secret: 'MMUyZqeWLA2MaqOzGtmyzZ92J0I6dLRFQ2x9PegKV4iUk0YDMw8wX7kqyG13/TWfBPV9U4ECvTmjoo5FjmdaAmaYScJiaXG9I8eF2qTYr+nrlDSdUhA6SMzhXS0EPpk9WiM7q+GhEEafrzvRwNQDIu2YAv+G5iXoK9eQwi4P08vS9+2fnuoZCDI838YgwdDWchmS9dOdLIK7RsrMnmBJvFOhWQtZUn6VsJl8dAb+fnwoZeOPbfKsriS9RqzntN/+tEajBqqnKv5d+SlaKenllh7+uymtr3Fc4T88nUHrDlvl557+rTkRMwwshAFDM7HPBuTM1hNhydkogi53RShq2w==',
    cache: {
        store: 'memory', // tipo de estrategia de cache
        ttl: 600, // tempo de vida do cache em segundos
        max: 100 // quantidade de itens que seral salvos na memoria
    }
}

