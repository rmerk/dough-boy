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
    }
});
