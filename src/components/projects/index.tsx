import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card";
import StarIcon from "../../assets/icons/star.svg";
import ForkIcon from "../../assets/icons/fork.svg";
import "./styles.css";


const couples = [
	["#D4145A", "#FBB03B"],
	["#662D8C", "#ED1E79"],
	["#009245", "#FCEE21"],
	["#D585FF", "#00FFEE"],
]


export default () => {
  const {
    github: {
      viewer: {
        repositories: { edges }
      }
    }
  } = useStaticQuery(
    graphql`
      {
        github {
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
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );
  return (
	<>
        {edges.map(
  			({ node: { id, url, name, description, stargazers, forkCount } }: { node: { id: string, url: string, name: string, description: string, stargazers: { totalCount: number }, forkCount: number } }) => {
				const getRandomColor = () => {
					const randomIndex = Math.floor(Math.random() * couples.length);
					return couples[randomIndex];
				};
			
				return (
					<ProjectCard
						key={id}
						title={name}
						link={url}
						bg={`linear-gradient(to right, ${getRandomColor()[0]} 0%, ${getRandomColor()[1]}  100%)`}
						>
						{description}
						<div className="container">
							<span>
								<StarIcon/>
								<p>{stargazers.totalCount}</p>
							</span>
							<span>
								<ForkIcon/>
								<p>{forkCount}</p>
							</span>
						</div>
					</ProjectCard>)
			}
        )}
	</>
  );
};