import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  // projectId : process.env.NEXT_PUBLIC_PROJECT_ID,
  projectId : "7rdbsx5y",
  // dataset :process.env.NEXT_PUBLIC_SANITY_DATASET,
  dataset :"production",
  apiVersion:'2025-01-19',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // token:process.env.NEXT_PUBLIC_SANITY_TOKEN
  token:"sk92ijkroI5UPKjVHo3aeG9TKmKVxqEueokD2mu8ve6atkAwcpvsCIFsDppcAveHoQKIea7cn3Y4jP3d0lEahoeLVmArkCv0KLh8ma2JduYg4GXINaDeSKag3XWf4M0pYIZaI188PNjA5WU2I0AHcAKw8SjOVCmGjT9PDaQXQ0VcaCQcOxwg"

});
