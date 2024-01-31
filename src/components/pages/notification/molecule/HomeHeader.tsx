import Typography from '@components/common/atom/Typography';

export default function HomeHeader() {
  return (
    <header className="w-full pl-5 pt-10 pr-3 pb-4 mb-[163px]">
      <div className="flex justify-between">
        <Typography variant="header01" fontColor="gray08">
          PeerNa
        </Typography>
      </div>
    </header>
  );
}
