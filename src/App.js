import React from "react"
import styles from "./App.module.css"
import {Cards, Chart, CountryPicker} from "./components"
import { fetchData } from "./api"
import coronaImage from "./images/image.png"

export default class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        let fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const {data,country} = this.state;
        return (
            <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data = {data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}