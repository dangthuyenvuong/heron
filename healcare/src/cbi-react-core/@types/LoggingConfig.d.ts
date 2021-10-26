declare type LoggingConfig = {
    default: 'sentry',
    driver: {
        sentry?: {
            url: string
        }
    }
}