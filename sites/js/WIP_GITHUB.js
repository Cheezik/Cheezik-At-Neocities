async function fetchLastCommitTime() {
    try {
        const response = await fetch("https://api.github.com/repos/Cheezik/Cheezik-At-Neocities/commits/latest");
        const data = await response.json();

        // Extract the commit time directly from the "committer.date" field
        const commitTime = new Date(data.committer.date).toLocaleString();

        // Display the commit time in the HTML element
        document.getElementById("LastGithubCommit").textContent = `Last Commit Time: ${commitTime}`;
    } catch (error) {
        console.error("Error fetching commit time:", error);
        document.getElementById("LastGithubCommit").textContent = "Failed to fetch last commit time.";
    }
}

fetchLastCommitTime();