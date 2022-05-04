import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url' ;


export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-10-21',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});
// code we need to write when workinf with images from sanity
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);