import React, { useState } from 'react';
import { Button, Input, Modal, Select, Table } from '../components';
import Layout from '../hoc/Layout';
import { GrAdd } from 'react-icons/gr';

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

  const sizeOptions = [
    { value: '', label: 'Select Category' },
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Layout>
        <Table columns={columns} data={data} />
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          className="fixed bottom-4 right-4 border bg-cyan-700 cursor-pointer rounded-full text-2xl text-white py-4"
          variant="secondary"
        >
          <GrAdd />
        </Button>
        <Modal isOpen={isOpen} title="Add Menu">
          <Modal.Body>
            <div className="flex flex-col">
              <Select label="Category" options={sizeOptions} />
              <Input placeholder="Name..." label="Name" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Save</Button>
            <Button
              variant="secondary"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Layout>
    </>
  );
};

export default App;
