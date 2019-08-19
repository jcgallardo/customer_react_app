import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const CustomerListItem = ({ name, editAction, delAction, urlPath, dni }) => {
    return (
        <div>
            <div className="customer-list-item">
                <div className="field">
                    <Link to={ `${urlPath}${dni}` }>{ name }</Link>
                </div>
                <div className="actions">
                    <div className="field edit">
                        <Link to={ `${urlPath}${dni}/edit` }>
                            <button>{ editAction }</button>
                        </Link>
                    </div>
                    <div className="field delete">
                        <Link to={ `${urlPath}${dni}/del` }>
                            <button>{ delAction }</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
};

export default CustomerListItem;