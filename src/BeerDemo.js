import React,{Component} from 'react';
import { Table, Card,CardBody,CardHeader } from 'reactstrap';
const axios = require('axios');
export class BeerDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        const that = this
        axios.get('https://api.punkapi.com/v2/beers')
        .then(function (response) {
          // handle success
          console.log(response);
          that.setState({data:response.data})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    render(){
        let {data}=this.state;
        return(
            <div>
              
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>

                <Card style={{backgroundColor:'#344a4a47'}}>
                    <CardHeader>
                        <h3>Bear App</h3>
                    </CardHeader>
                    <CardBody>
                    <Table responsive bordered hoverable striped size="sm">
                    <thead>
                        <th style={{minWidth:'100px'}}>Sr.No</th>
                        <th style={{minWidth:'200px'}}>Image</th>
                        <th style={{minWidth:'50px'}}>Name</th>
                        <th style={{minWidth:'200px'}}>Volume</th>
                        <th style={{minWidth:'200px'}}>Description</th>
                        <th style={{minWidth:'200px'}}>Brewer Tip</th>
                    </thead>
                    <tbody>
                        {data.map((d,index)=>(
                            <tr>
                                <td>{index+1}</td>
                        <td><img src={d.image_url} alt="bear" className="img-fluid" style={{height:'70px',width:'50px'}}/><br/>{d.tagline}</td>
                                <td>{d.name}</td>
                                <td>{d.volume.value}{d.volume.unit}</td>
                                <td>{d.description}</td>
                                <td>{d.brewers_tips}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                    </CardBody>
                </Card>
                
            </div>
        );
    }
}