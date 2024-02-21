import React, { useEffect, useState } from 'react';
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
import { addMenu, deleteMenu, getMenus, updateMenu } from '../../helper/query';
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Menu = () => {
  const columns = [
    { header: 'Category', field: 'category' },
    { header: 'Name', field: 'name' },
    { header: 'Size', field: 'size' },
    { header: 'Price', field: 'price' },
    { header: 'Cost', field: 'cost' },
    { header: 'Stock', field: 'stock' },
    { header: 'Action', field: 'action' },
  ];

  const sizeOptions = [
    { value: '', label: '--' },
    { value: 'main', label: 'Main' },
    { value: 'dessert', label: 'Dessert' },
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'drinks', label: 'Drinks' },
  ];

  const radioOptions = [
    { value: 'small', label: 'Small' },
    { value: 'meduim', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  const [menus, setMenus] = useState([]);
  const [menuId, setMenuId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  //fetching data
  const fetchData = () => {
    getMenus().then((data) => {
      setMenus(data);
    });

    setOpenLoading(false);
  };

  //post request
  const handlePost = async (data) => {
    setOpenLoading(true);
    await addMenu(data);
    toast.success('Menu Created Successfully.');
    fetchData();
  };

  const handleDelete = async (id) => {
    setOpenLoading(true);
    await deleteMenu(id);
    setIsOpenDelete(false);

    toast.success('Menu Deleted Successfully.');
    fetchData();
  };

  const handleUpdate = async (data) => {
    setValue('category', data.category);
    setValue('name', data.name);
    setValue('price', data.price);
    setValue('size', data.size);
    setValue('cost', data.cost);
    setValue('stock', data.stock);

    setIsOpen(true);
  };

  const onSubmit = async (data) => {
    if (menuId) {
      setOpenLoading(true);
      setIsOpen(false);
      await updateMenu(menuId, data);

      toast.success('Menu Updated Successfully.');
      fetchData();
    } else {
      handlePost(data);
    }

    setIsOpen(false);
    reset();
  };

  const renderMenus = menus
    ? menus.map((item) => {
        return {
          category: item.category,
          name: item.name,
          size: item.size,
          price: item.price,
          cost: item.cost,
          stock: item.stock,
          action: (
            <div className="flex items-center space-x-5">
              <span
                className="flex flex-row cursor-pointer items-center"
                onClick={() => {
                  handleUpdate(item);
                  setMenuId(item.id);
                }}
              >
                <MdEdit className="w-5 h-5" /> Edit
              </span>
              <span
                className="flex flex-row cursor-pointer items-center"
                onClick={() => {
                  setIsOpenDelete(true);
                  setMenuId(item.id);
                }}
              >
                <MdDelete className="w-5 h-5" /> Delete
              </span>
            </div>
          ),
        };
      })
    : [];

  return (
    <Layout openLoading={openLoading}>
      <Table columns={columns} data={renderMenus} />
      <Button
        onClick={() => {
          setIsOpen(true);
          setMenuId(null);
          reset();
        }}
        className="fixed bottom-4 right-4 bg-cyan-700 cursor-pointer rounded-full text-2xl text-white py-4"
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
              {`${menuId ? 'Update' : 'Save'}`}
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

      {/* Spiel message for delete */}

      <Modal isOpen={isOpenDelete} variant="spiel">
        <Modal.Body>
          <div className="flex flex-col items-center justify-center ">
            <FaRegCircleQuestion className="w-[45%] h-[45%] text-cyan-700 mb-5" />
            <label className="text-sm text-center">
              Are you sure you want to this delete this record?
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleDelete(menuId)}>
            Ok
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setIsOpenDelete(false);
              setMenuId(null);
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Menu;
