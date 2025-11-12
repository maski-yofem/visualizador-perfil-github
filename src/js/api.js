export async function fetchGitHubUser(userName) {
    const baseUrl = 'https://api.github.com';

    const response = await fetch(`${baseUrl}/users/${userName}`);

    if (!response.ok) {
        const err = new Error(`HTTP ${response.status}`);
        err.status = response.status;
        throw err;
    }

    return await response.json();
}
