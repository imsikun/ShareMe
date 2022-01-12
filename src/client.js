import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//connecting sanity to the frontend
export const client = sanityClient({
  //project id coming from the sanity manage section
  projectId: process.env.REACT_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-01-12',
  useCdn: true,
  //token generated from sanity manage section
  token: process.env.REACT_SANITY_PROJECT_TOKEN,
});

//sanity imageBuilder
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
