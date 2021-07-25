import React from 'react';

import { useLocation, useRouteMatch, Link, Route } from 'react-router-dom';

const Breadcrumbs = () => {
    const { path, url } = useRouteMatch()

  return (
      <>
    <h2 className='currentCrumb'><Link to='/'>Articles</Link> / Pop Culture.</h2>
    </>
  ) 
}

export default Breadcrumbs