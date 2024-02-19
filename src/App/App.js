import React from 'react';
import { Button, Table } from '../components';
import Layout from '../hoc/Layout';
import { GrAdd } from 'react-icons/gr';
import { useModalStore } from '../store';

const App = () => {
  const open = useModalStore((state) => state.setOpen);
  const close = useModalStore((state) => state.setClose);
  const setModalStore = useModalStore((state) => state.setModal);

  const handleModal = () => {
    setModalStore({
      title: 'HHAHAHA',
      body: (
        <>
          <bold>asdasdasdasd</bold>
          <i>italic</i>
        </>
      ),
      footer: (
        <>
          {' '}
          <Button variant="primary" onClick={open}>
            Open
          </Button>{' '}
          <Button variant="primary" onClick={close}>
            Close
          </Button>
        </>
      ),
    });
  };

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
    <>
      <Layout>
        <Table columns={columns} data={data} />
        <Button
          onClick={() => {
            handleModal();
            open();
          }}
          className="fixed bottom-4 right-4 border bg-cyan-700 cursor-pointer rounded-full text-2xl text-white py-4"
          variant="secondary"
        >
          <GrAdd />
        </Button>
      </Layout>
    </>
  );
};

export default App;
