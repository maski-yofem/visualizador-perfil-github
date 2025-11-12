import { fetchGitHubUser } from './api.js';
import { showLoading, showError, renderProfile } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();

    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    showLoading(profileResults);

    try {
        const userData = await fetchGitHubUser(userName);
        renderProfile(profileResults, userData);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);

        if (error && error.status === 404) {
            showError(profileResults, 'Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        } else {
            showError(profileResults, 'Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }
    }
});
