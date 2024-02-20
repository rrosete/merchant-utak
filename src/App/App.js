import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  RadioButton,
  Select,
  Table,
} from '../components';
import Layout from '../hoc/Layout';
import { GrAdd } from 'react-icons/gr';
import { TbCurrencyPeso } from 'react-icons/tb';

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
    { value: 'main', label: 'Main' },
    { value: 'dessert', label: 'Dessert' },
    { value: 'breakfast', label: 'Breakfast' },
  ];

  const radioOptions = [
    { id: 1, label: 'Small' },
    { id: 2, label: 'Medium' },
    { id: 3, label: 'Large' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (optionId) => {
    console.log(optionId);
    setSelectedOption(optionId);
  };

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

              <RadioButton
                label={'Size'}
                options={radioOptions}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />

              <div className="grid grid-cols-2 gap-x-4">
                <Input
                  placeholder="Price..."
                  label="Price"
                  icon={
                    <>
                      <TbCurrencyPeso />
                    </>
                  }
                />

                <Input
                  placeholder="Cost..."
                  label="Cost"
                  icon={
                    <>
                      <TbCurrencyPeso />
                    </>
                  }
                />

                <Input placeholder="Stock..." label="Stock" />
              </div>
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
