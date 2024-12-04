export default (env) => ({
    "gen-types": {
        enabled: true,
        config: {
            outputLocation: "myTypes.ts",
            // If this is true, then the outputLocation should be the location to a .ts file
            singleFile: true,
        },
    },
    "square-payments": {
        enabled: true,
        config: {
            applicationId: "sandbox-sq0idb-0J7p3y0g5rLQnLg2b8N6vA",
            locationId: "L2XQY5Q9Q8X4V",
            currency: "USD",
        },
    },
});
