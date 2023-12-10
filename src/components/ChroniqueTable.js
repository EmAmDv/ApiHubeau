import { useState, useEffect } from 'react'

const ChroniqueTable = () => {

const [chroniqueData, setChroniqueData] = useState([{}]);

useEffect(() => {
    fetch(`https://hubeau.eaufrance.fr/api/v1/temperature/chronique?code_station=${window.location.href.slice(30)}&size=5`)
      .then((response) => response.json())
      .then((json) => setChroniqueData(json.data))
}, []);

return (
    <div>
        <>
          <h3>Détail de la station : {chroniqueData[0].libelle_station}</h3>
          <h4>Date de mesure : {chroniqueData[0].date_mesure_temp}</h4>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Heure de mesure</th>
                <th>Température</th>
              </tr>
            </thead>
            <tbody>
            {chroniqueData.map(chronique => (
              <tr key={chronique.heure_mesure_temp}>
                <td>{chronique.heure_mesure_temp}</td>
                <td>{chronique.resultat}°C</td>
              </tr>
            ))}
            </tbody>
          </table>
          <a className="inline-block" href={chroniqueData[0].uri_station} rel="noreferrer" target="_blank">Référence externe</a>
          <br></br>
          <a href="javascript:window.close();" className="close">x Close x</a>
        </>
    </div>
)
}

export default ChroniqueTable