import { getPinnedRepos } from '../../lib/github';

export const runtime = 'edge';

export async function GET() {
  try {
    const repos = await getPinnedRepos();
    
    return new Response(
      JSON.stringify(repos),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://onlive.is-a.dev',
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify([]),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://onlive.is-a.dev',
        },
      }
    );
  }
}