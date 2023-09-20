import { useState } from 'react';
import { Catalog } from '../../components/catalog/Catalog';
import { ChooseForm } from '../../components/chooseForm/ChooseForm';

const CatalogPage = () => {
  const [filter, setFilter] = useState({});

  return (
    <>
      <ChooseForm setFilter={setFilter} />
      <Catalog filter={filter} />
    </>
  );
};

export default CatalogPage;
