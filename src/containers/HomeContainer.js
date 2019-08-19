import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'

class HomeContainer extends Component {
    handleOnClick = () => {
        this.props.history.push("/customers")
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='APP DE GESTIÓN DE USUARIOS'
                    body={
                        <div>
                            <h2>{ "Aplicación React para gestión de usuarios" }</h2>
                            <img class="AppImage" alt={ 'react icon'} src={ 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' } />
                            <CustomersActions>
                                <button onClick={ this.handleOnClick }>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);