import React from 'react';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const RootBreadcrumb = ({ match }) => {
    console.log(match);


    return (
        <Breadcrumb style={{ margin: '12px 0' }}>
        </Breadcrumb>
    )


}

RootBreadcrumb.propTypes = {
    match: PropTypes.object,
}

export default RootBreadcrumb