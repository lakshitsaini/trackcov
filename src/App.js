import React,{Component} from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './images/covid.jpg';

class App extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    //console.log(fetchedData)
    this.setState({
      data:fetchedData
    })
  }
  handleCountryChange = async (country) => {
    //console.log(country);
    //fetch the data
    //set the data
    const fetchedData = await fetchData(country);
    //console.log(fetchedData);
    this.setState({
      data:fetchedData,
      country:country,
    })
  }
  render(){
    const {data, country} = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt='COVID-19'/>
        <p className={styles.qoute}>"Ultimately, the greatest lesson that COVID-19 can teach humanity is that we are all in this together."</p>
        <Cards data = {data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <footer className={styles.footer}>
          <h3>©2021 Lakshit Saini</h3>
          <p>Developed with &hearts; using <a href="https://covid19.mathdro.id/api" >covid-19 api</a></p>
    </footer>
      </div>
    )
  }
}
export default App;