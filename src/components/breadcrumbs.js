import React from 'react';



const Breadcrumbs = () => {
    const { path, url } = useRouteMatch()

  return (
      <>
    <h2 className='currentCrumb'><Link to='/'>Articles</Link> / Pop Culture.</h2>
    <div className='hr'/>
    </>
  ) 
}

export default Breadcrumbs