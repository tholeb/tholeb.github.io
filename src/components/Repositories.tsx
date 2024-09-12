'use client';

import { useEffect, useState } from 'react';

import BlurFade from './magicui/blur-fade';
import { Icons } from './icons';
import { ProjectCard } from './project-card';
import axios from 'axios';

const BLUR_FADE_DELAY = 0.04;

interface Repo {
	repositoryTopics: {
		nodes: { topic: { name: string } }[];
	};
	id: string;
	name: string;
	url: string;
	createdAt: string;
	description: string;
	stargazers: { totalCount: number };
	forkCount: number;
}

const Repositories: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.post(
          'https://api.github.com/graphql',
          {
            query: `
              query {
                viewer {
                  repositories(
                    first: 6
                    orderBy: { field: STARGAZERS, direction: DESC }
                  ) {
                    edges {
                      node {
                        id
                        name
                        url
                        description
                        createdAt
                        stargazers {
                          totalCount
                        }
                        forkCount
                        repositoryTopics(first:5) {
                          nodes {
                            topic {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GH_PAT}`,
            },
          }
        );
        setRepos(response.data.data.viewer.repositories.edges.map((edge: any) => edge.node));
      } catch (err) {
        setError('Failed to load repositories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
	<>
		{repos.map((r, id) => (
		<BlurFade
			key={id}
			delay={BLUR_FADE_DELAY * 6 + id * 0.05}
		>
			<ProjectCard
				key={r.id}
				href={r.url}
				forksCount={r.forkCount}
				starsCount={r.stargazers.totalCount}
				title={r.name}
				description={r.description}
				links={[
					{
						href: r.url,
						icon: <Icons.github className='size-3'/>,
						type: "Repo",
					},
				]}
				tags={r.repositoryTopics.nodes.map((node: any) => node.topic.name)}
				dates={new Date(r.createdAt).toLocaleDateString()}
			/>
		</BlurFade>
	))}
	</>
  );
};
// <div>
//   <h2>Top Repositories</h2>
//   <ul>
//     {repos.map((repo) => (
//       <li key={repo.id}>
//         <a href={repo.url} target="_blank" rel="noopener noreferrer">
//           <strong>{repo.name}</strong>
//         </a>
//         <p>{repo.description}</p>
//         <p>⭐ {repo.stargazers.totalCount} | 🍴 {repo.forkCount}</p>
//       </li>
//     ))}
//   </ul>
// </div>

export default Repositories;
