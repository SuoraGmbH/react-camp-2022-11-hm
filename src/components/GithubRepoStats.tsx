import { useEffect, useMemo, useState } from "react";

interface Props {
  repoName: string;
}

const GithubRepoStats = ({ repoName }: Props) => {
  const [stars, setStars] = useState(0);
  // const {data} = useFetchData(`https://api.github.com/repos/${repoName}`)

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
    </div>
  );
};

export default GithubRepoStats;
