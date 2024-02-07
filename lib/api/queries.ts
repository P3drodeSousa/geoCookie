import { fetchAPI } from ".";

/**
 * @returns ports preview from API (wordpress)
 */

export async function getAllPostsFromWordPress(preview: any) {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
          }
        }
      }
    }
  `);

  return data.posts;
}
