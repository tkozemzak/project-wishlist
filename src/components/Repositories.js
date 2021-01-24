import Repository from './Repository'

const Repositories = ({ repos }) => {

    const sortedRepos = repos.sort((a, b) => b.id - a.id)

    return (
        <ul>
            
           {sortedRepos.map((repo) => (
                   <Repository key={repo.id} repo={repo}/>
            ))}
           
        </ul>
    )
}

export default Repositories
