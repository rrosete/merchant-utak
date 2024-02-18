import React from 'react';
import { Table } from '../components';
import Layout from '../hoc/Layout';
import { IoIosAddCircle } from 'react-icons/io';

const App = () => {
  const columns = [
    { header: 'Category', field: 'category' },
    { header: 'Name', field: 'name' },
    { header: 'Price', field: 'price' },
    { header: 'Cost', field: 'cost' },
    { header: 'Stock', field: 'stock' },
    { header: 'Action', field: 'action' },
  ];

  const data = [
    {
      category: 'Break Fast',
      name: 'Item 1',
      price: '$10',
      cost: 0,
      stock: 88,
    },
    { category: 'Main', name: 'Item 2', price: '$20', cost: 0, stock: 88 },
    {
      category: 'Budget Meal',
      name: 'Item 3',
      price: '$30',
      cost: 0,
      stock: 88,
    },
    { category: 'Bundle', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Unlimited', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Bundle', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Unlimited', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Bundle', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Unlimited', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Bundle', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Unlimited', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Bundle', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Unlimited', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Bundle', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Unlimited', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Bundle', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
    { category: 'Unlimited', name: 'Item 3', price: '$30', cost: 0, stock: 88 },
  ];
  return (
    <Layout>
      <Table columns={columns} data={data} />
      {/* <Button className={'fixed top-24 right-4'} variant="secondary">
        Add
      </Button> */}
      <IoIosAddCircle
        className="fixed top-20 right-1 text-cyan-700 cursor-pointer"
        size={'64px'}
      />
    </Layout>
  );
};

export default App;
