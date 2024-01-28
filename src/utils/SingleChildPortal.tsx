import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface SingleChildPortalProps {
  children: ReactNode;
}

const SingleChildPortal: React.FC<SingleChildPortalProps> = ({ children }) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const newPortalElement = document.createElement('div');

    const portalContainer = document.getElementById('portal');
    if (!portalContainer) {
      console.error('Portal element not found');
      return;
    }

    if (portalContainer.hasChildNodes()) {
      portalContainer.innerHTML = '';
    }

    portalContainer.appendChild(newPortalElement);
    setPortalElement(newPortalElement);
  }, []);

  return portalElement ? ReactDOM.createPortal(children, portalElement) : null;
};

export default SingleChildPortal;
