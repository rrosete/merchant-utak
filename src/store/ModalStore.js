import create from 'zustand';

export const useModalStore = create((set) => ({
  isOpen: false,
  option: {
    title: '',
    body: null,
    footer: null,
    variant: 'form',
  },
  setOpen: () => set((state) => ({ isOpen: true })),
  setClose: () => set((state) => ({ isOpen: false })),
  setModal: (modalStore) =>
    set((state) => ({ option: { ...state.option, ...modalStore } })),
}));
