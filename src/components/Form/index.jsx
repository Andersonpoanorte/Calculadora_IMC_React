 
import { useState } from "react"
import styles from './Form.module.css'

const Form = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBMI] = useState(null);
    const [result, setResult] = useState(0);

    const calculaIMC = (e) => {
        e.preventDefault();
        
        const bmi = parseInt(weight / (height * height))
        .toFixed(1);
        setBMI(bmi);
        resultBmi(bmi);
    };

    const resultBmi = (bmi) => {
        if (bmi < 18.5) {
            setResult('Abaixo do peso');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setResult('Peso normal');
        }else if (bmi >= 24.9 && bmi <= 29.9) {
            setResult('Sobrepeso');
        }else {
            setResult('Obesidade');
        }
    };

    const reset = () => {
        setWeight('');
        setHeight('');
        setBMI('');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title1}>Calculate BMI</h1>

            <form className={styles.form}>
                <div className={styles.formInput}>
                    <label>Weight</label>
                    <input value={weight} onChange={(e) => setWeight((e.target.value))} type="number" placeholder="Ex: 60.5"/>
                </div>
                <div className={styles.formInput}>
                    <label>Height</label>
                    <input value={height} onChange={(e) => setHeight((e.target.value)).toFixed(2)} type="number" placeholder="Ex: 1.70"/>
                </div>
            </form>
                <div className={styles.button}>
                    <button onClick={calculaIMC} className={styles.form_btn} type="submit">Calculate</button>
                    <button onClick={(e) => {e.preventDefault(); reset();}} className={styles.form_btn} type="reset">Reset</button>
                </div>
                
            {bmi && (
                <div className={styles.containerTable}>
                    <h1 className={styles.title2}>Seu IMC é:</h1>
                    <h1 className={styles.title3}>{bmi}</h1>
                    <h2 className={styles.result}>{result}</h2>

                    <table>
                    <thead>
                        <tr>
                            <th>Grau</th>
                            <th>IMC</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        <tr>
                            <td>Magreza</td>
                            <td> -18.3</td>
                        </tr>
                        <tr>
                            <td>Normal</td>
                            <td>18.5 - 24.9</td>
                        </tr>
                        <tr>
                            <td>Sobrepeso</td>
                            <td>25 - 29.9</td>
                        </tr>
                        <tr>
                            <td>Obesidade</td>
                            <td>30+</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            )}
        </div>
    
    )
}

export default Form;