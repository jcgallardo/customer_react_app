import React, { Component } from 'react';
import { connect } from 'react-redux';

export const accessControl = permissionsRequired =>  WrapperComponent => {
    const SecuredControl = class extends Component {
       
        render(){
            const { permissions } = this.props.user;
            const isAllow = permissionsRequired.every(p => permissions.includes(p));

            if(!isAllow){
                return <div>No tiene permisos de accessControl</div>
            }

            return <WrapperComponent { ...this.props } />
        }
    }

    return connect(state => ({ user: state.user }))(SecuredControl)
}