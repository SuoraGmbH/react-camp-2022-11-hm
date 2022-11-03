import React, { useState } from "react";
import GithubRepoStats from "./GithubRepoStats";

const DynamicGithubRepoStats = () => {
  const [inputValue, setInputValue] = useState("");
  const [repoName, setRepoName] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if(inputValue.length === 0) {
      return
    }
    setRepoName(inputValue)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue} />
      <GithubRepoStats repoName={repoName} />
      <button type="submit">Absenden</button>
    </form>
  );
};

export default DynamicGithubRepoStats;
