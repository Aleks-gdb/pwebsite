import React, {Component} from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import "../App.css";
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from "react-apollo";
// import { Query } from '@apollo/react-components';
// import { gql } from "apollo-boost";

// const client = new ApolloClient({
//     uri: 'https://api.github.com/graphql',
//   });

export default class Github extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            user: [],
            repos: []
        };
    }

    //TODO SETUP REST BACKEND
    // getRepos = () =>(
    //     <ApolloProvider client={client}>
    //         <Query query = {gql `{
    //             repositoryOwner(login: "aleks-gdb") 
    //             {
    //                 ... on User {
    //                 pinnedRepositories(first:6) {
    //                     edges {
    //                     node {
    //                         name
    //                     }
    //                     }
    //                 }
    //                 }
    //             }
    //         }`}>
    //         {({ loading, error, data } ) => {
    //         if (loading) return <p>Loading...</p>;
    //         if (error) return <p>Error :({console.log(error)}</p>;
    
    //             return data.pinnedRepositories.map(({ name }) => (
    //             <div key={name}>
    //                 <p>
    //                 {name}
    //                 </p>
    //             </div>
    //             ));
    //         }}
    //         </Query>
    //     </ApolloProvider>
    // );
    
    async componentDidMount() {
        await fetch(`https://api.github.com/users/aleks-gdb`)
            .then(response => response.json())
            .then(data => {this.setState({user: data})});
        console.log(this.state.user);
        await fetch(`https://api.github.com/users/aleks-gdb/repos`)
            .then(response => response.json())
            .then(data => {this.setState({repos: data})});
        console.log(this.state.repos);
    }

    render(){
        return(
            <div id="github" name="github">
                <div className="github" aos="fade-down">
                    <h1>My GitHub at a Glance</h1>
                    <Container fluid>
                        <Row>
                            <Col xs={5} md={3}>
                                <Jumbotron id="githubProfile">
                                <a href={this.state.user.html_url} target="_blank" rel="noopener noreferrer">
                                <h1 id="repoName">{this.state.user.login}</h1>
                                </a>
                                <Image src={this.state.user.avatar_url} rounded id="profilePic"/>
                                <p id="githubBio">{this.state.user.bio}</p>
                                </Jumbotron>
                            </Col>
                            <Col>
                            <Container id="repoContainer">
                                <Row>
                               {/* {this.getRepos()} */}
                               {this.state.repos.map( (repo) =>{
                                   return(
                                       <Col xs={6} md={4}>
                                           <Jumbotron id="repos">
                                           <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                           <h1 id="repoName">{repo.name}</h1>
                                           </a>
                                           <p id="repoDesc">{repo.description}</p>
                                           <p id="repoLang">{repo.language == null ? "Language: JavaScript" : "Language: ".concat(repo.language)}</p>
                                            </Jumbotron>
                                       </Col>
                                   )
                                }
                               )}
                               </Row>
                            </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}