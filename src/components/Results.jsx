import {calculateInvestmentResults,formatter} from '../util/investment'

export default function Results({userInput}){
    const resultsData=calculateInvestmentResults(userInput);
    console.log(resultsData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investement Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData)=>{

                    
                    const totalInterst=yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-userInput.initialInvestment;
                    return (<tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterst)}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    </tr>)
                    })
                }

            </tbody>
        </table>
    );
}