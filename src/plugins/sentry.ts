import Vue from 'vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    Vue,
    dsn: 'https://29354945951a4109903c8ecbb7e34806@o557645.ingest.sentry.io/5690142',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  })
}
