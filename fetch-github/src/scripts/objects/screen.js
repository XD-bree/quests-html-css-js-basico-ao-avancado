const screen =  {
    userProfile: document.querySelector('.profile-data'),
    renderUser (user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                                <p>${user.bio ?? 'Não possui Bio cadastrado 😢'}</p>
                                                <ul class="profile-numbers">
                                                    <li class="status">
                                                        <p class="counter">👥${user.followers}</p>
                                                        <span class="counter_type">Seguidores</span>
                                                    </li>
                                                    <li class="status">
                                                        <p class="counter">👤${user.following}</p>
                                                        <span class="counter_type">Seguindo</span>
                                                    </li>
                                                </ul>
                                            </div>
                                      </div>`

        let repositoriesItens = ' '
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} 🍴${repo.forks} ⭐${repo.stargazers_count
        } 👀${repo.watchers} ${repo.language ?? '🤔'} </a></li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios:</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsList = ''
        const filteredEvents = user.events.filter(event => {
            return event.type === 'CreateEvent' || event.type === 'PushEvent'
        })
        filteredEvents.forEach(events => {
            eventsList += `<li><p>${events.repo.name} <span> - ${events.payload.description ?? 'Esse evento não possui uma mensagem'}</span></p></li>`
        });

        this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Eventos:</h2>
                                            <ul>${eventsList}</ul>                                                          
                                       </div>`
    }, 
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export {
    screen
}
