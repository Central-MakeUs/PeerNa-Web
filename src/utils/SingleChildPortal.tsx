import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface SingleChildPortalProps {
  children: ReactNode;
}

const SingleChildPortal: React.FC<SingleChildPortalProps> = ({ children }) => {
  const [portalContent, setPortalContent] = useState<React.ReactPortal | null>(
    null,
  );

  useEffect(() => {
    const portalElement = document.getElementById('portal')!;
    if (!portalElement) {
      console.error('Portal element not found');
      return;
    }

    while (portalElement.firstChild) {
      portalElement.removeChild(portalElement.firstChild);
    }

    const element = document.createElement('div');
    portalElement.appendChild(element);

    const portal = ReactDOM.createPortal(children, element);
    setPortalContent(portal);

    return () => {
      portalElement.innerHTML = '';
    };
  }, [children]);

  return portalContent;
};

export default SingleChildPortal;
