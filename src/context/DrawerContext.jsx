import React, {createContext, useContext, useRef, useState} from 'react';

const DrawerContext = createContext();

export const DrawerProvider = ({children}) => {
  const drawerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    drawerRef.current?.openDrawer();
    setIsOpen(true);
  };

  const closeDrawer = () => {
    drawerRef.current?.closeDrawer();
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{openDrawer, closeDrawer, isOpen, drawerRef}}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(DrawerContext);
};
