/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import { JOB_MAPPER, PART_MAPPER } from '@constants/mapper';
import { CreatorSimpleProfileType } from "@type/index";

export default function ProjectCreatorProfile({
  name,
  job,
  part,
  oneLiner,
  totalScore,
}: CreatorSimpleProfileType) {
  return (
    <div className="w-full flex justify-between items-center px-5 py-4">
      <div className="flex gap-3">
        <div
          className={`w-[24px] h-[24px] p-3 box-content rounded-full ${'bg-gray01'}`}
        >
          {/* <img src={cardItem[testType]} alt="테스트 결과 카드" /> */}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Typography variant="header03" fontColor="gray08">
              {name}
            </Typography>
            <Typography variant="caption01" className="text-primary500">
              {PART_MAPPER[part]}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography variant="body04" className="text-gray07 mr-1">
              {JOB_MAPPER[job]}
            </Typography>
            <span className="text-gray04">|</span>
            <Typography variant="body04" className="text-gray07 ml-1">
              {` 종합점수 ${totalScore}점`}
            </Typography>
          </div>
          <Typography variant="body05" className="text-gray05">
            {oneLiner}
          </Typography>
        </div>
      </div>
      <div className="h-full flex items-center">
        <Button buttonVariant="tertiary" buttonSize="sm">
          자세히
        </Button>
      </div>
    </div>
  );
}
