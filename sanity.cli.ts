import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'xfkwtbtp', 
    dataset: 'production'
  },
  deployment: {
    appId: 'v31lcygwpwilh44g63q9hf68',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
//v31lcygwpwilh44g63q9hf68'