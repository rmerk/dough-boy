export default ({ env }) => ({
    "gen-types": {
        enabled: true,
        config: {
            outputLocation: "myTypes.ts",
            // If this is true, then the outputLocation should be the location to a .ts file
            singleFile: true,
        },
    },
    email: {
        config: {
            provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
            providerOptions: {
                apiKey: env('STRAPI_SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'rm.main@gmail.com',
                defaultReplyTo: 'rm.main@gmail.com',
                testAddress: 'rm.main@gmail.com',
            },
        },
    },
    documentation: {
        enabled: true,
        config: {
            openapi: '3.0.0',
            info: {
                version: '1.0.0',
                title: 'DOCUMENTATION',
                description: '',
                termsOfService: 'YOUR_TERMS_OF_SERVICE_URL',
                contact: {
                    name: 'Choice One Web Solutions',
                    email: 'ryan@ryanchoi.dev',
                    url: 'https://ryanchoi.dev'
                },
                license: {
                    name: 'Apache 2.0',
                    url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
                },
            },
            'x-strapi-config': {
                // Leave empty to ignore plugins during generation
                plugins: ['upload', 'users-permissions'],
                path: '/documentation',
            },
            servers: [{ url: 'http://localhost:1337/api', description: 'Development server' }],
            externalDocs: {
                description: 'Find out more',
                url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
            },
            security: [{ bearerAuth: [] }]
        }
    }
});
