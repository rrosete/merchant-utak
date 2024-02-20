import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  RadioButton,
  Select,
  Table,
} from '../../components';
import Layout from '../../hoc/Layout';
import { GrAdd } from 'react-icons/gr';
import { TbCurrencyPeso } from 'react-icons/tb';
import { useForm, Controller } from 'react-hook-form';

const Menu = () => {
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
    { value: 1, label: 'Small' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'Large' },
  ];

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="flex flex-col">
              <Controller
                name="category"
                control={control}
                rules={{ required: 'Required this field' }}
                render={({ field }) => (
                  <Select
                    label="Category"
                    options={sizeOptions}
                    error={errors.category && errors.category.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="name"
                control={control}
                rules={{ required: 'Required this field' }}
                render={({ field }) => (
                  <Input
                    placeholder="Name..."
                    label="Name"
                    error={errors.name && errors.name.message}
                    {...field}
                  />
                )}
              />

              <Controller
                name="size"
                control={control}
                rules={{ required: 'Please select an option' }}
                render={({ field }) => (
                  <RadioButton
                    options={radioOptions}
                    label="Size"
                    selectedOption={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    error={errors.size && errors.size.message}
                    {...field}
                  />
                )}
              />

              <div className="grid grid-cols-2 gap-x-4">
                <Controller
                  name="price"
                  control={control}
                  rules={{
                    required: 'Required this field',
                    pattern: {
                      value: /^\d+$/,
                      message: 'Please enter only numbers',
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      placeholder="Price..."
                      label="Price"
                      error={errors.price && errors.price.message}
                      icon={
                        <>
                          <TbCurrencyPeso />
                        </>
                      }
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="cost"
                  control={control}
                  rules={{
                    required: 'Required this field',
                    pattern: {
                      value: /^\d+$/,
                      message: 'Please enter only numbers',
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      placeholder="Cost..."
                      label="Cost"
                      error={errors.cost && errors.cost.message}
                      icon={
                        <>
                          <TbCurrencyPeso />
                        </>
                      }
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="stock"
                  control={control}
                  rules={{ required: 'Required this field' }}
                  render={({ field }) => (
                    <Input
                      placeholder="Stock..."
                      label="Stock"
                      error={errors.stock && errors.stock.message}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setIsOpen(false);
              }}
              type="button"
            >
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Layout>
  );
};

export default Menu;
