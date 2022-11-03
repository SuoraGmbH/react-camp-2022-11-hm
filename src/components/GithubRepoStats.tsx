import { useEffect, useMemo, useState } from "react";

interface Props {
  repoName: string;
}

const GithubRepoStats = ({ repoName }: Props) => {
  const [stars, setStars] = useState(0);
  const [fancyRepoName, setFancyRepoName] = useState(repoName);
  useEffect(() => {
    setTimeout(() => {
      setFancyRepoName(repoName.toUpperCase());
    }, 5000);
  }, [repoName]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repoName}`)
      .then((response) => response.json())
      .then((repoData) => {
        setStars(repoData.stargazers_count);
      });
  }, [repoName]);

  return (
    <div>
      {repoName} hat {stars} Stars
      <hr />
      Fancy: <h2>{fancyRepoName}</h2>
    </div>
  );
};

export default GithubRepoStats;
