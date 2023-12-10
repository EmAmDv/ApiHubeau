import StationTable from './StationTable';

const Home = () => {

    return (
            <main>
                <div className="home">
                    <h3>Interaction avec l'API de Température des cours d'eau "Hub'Eau"</h3>
                    <StationTable />
                </div>
            </main>
    )
}

export default Home