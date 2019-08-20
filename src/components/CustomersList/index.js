import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

import './CustomerList.scss';
import { accessControl } from '../../helpers/accessControl';
import { CUSTOMER_LIST } from '../../constants/permissions';

const CustomersList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customerList">
                {  
                    customers.map( c => 
                        <CustomerListItem
                            key={ c.dni }
                            name={ c.name }
                            dni={ c.dni }
                            editAction={ 'Editar' }
                            delAction={ 'Eliminar' }
                            urlPath={ urlPath }
                        />
                    )
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);