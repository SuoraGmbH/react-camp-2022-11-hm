import { useEffect, useMemo, useState } from "react";

interface Props {
  repoName: string;
}

const GithubRepoStatsWithHook = ({ repoName }: Props) => {
  const stars = useGithubRepoStars(repoName);

  return (
    <div>
      {repoName} hat {stars} Stars
      <hr />
    </div>
  );
};

export default GithubRepoStats;
