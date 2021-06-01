import React from 'react';

import Layout from '../components/Layout';
import Button from '../components/Button';

const PageNotFound: React.FC = ( ) => {
  return (
    <Layout is404>
      <h1>Oops! Parece que a página que você está procurando sumiu ou foi abduzida...</h1>
      <h2>Que tal voltar para a página inicial e dar uma olhada nos posts que temos lá?</h2>
      <Button id="home-button" url="/" fitContent>Voltar para Home</Button>
    </Layout>
  );
};

export default PageNotFound;
