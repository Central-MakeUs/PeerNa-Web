import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import { Button } from '@nextui-org/react';
import { ActivityComponentType } from '@stackflow/react';

const DeveloperPage: ActivityComponentType = () => {
  return (
    <AppScreenContainer>
      <div className="min-h-screen">
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
        <div className="h-[100px]">hello</div>
      </div>
      <Button className="absolute bottom-10">test button</Button>
    </AppScreenContainer>
  );
};

export default DeveloperPage;
