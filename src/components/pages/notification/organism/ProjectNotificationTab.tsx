import Project from '@components/pages/notification/molecule/Project';
import {
  ProjectProposeResult,
  ProjectRecruitPropose,
} from '@components/pages/notification/molecule/ProjectType';

export default function ProjectNotificationTab() {
  const mocks: {
    type: 'recruit' | 'accept' | 'reject';
    params: Record<string, string>;
    title: string;
    subtitle: string;
  }[] = [
    {
      type: 'recruit',
      params: { id: '1' },
      title: '시간 관리 어플 개발 참여 제안이 있어요.',
      subtitle: '1분 전',
    },
    {
      type: 'accept',
      params: {},
      title: '이관희 님이 길찾기 어플 개발 참여 제안을 수락했어요',
      subtitle: '1 분전',
    },
    {
      type: 'reject',
      params: {},
      title: '이관희 님이 길찾기 어플 개발 참여 제안을 거절했어요',
      subtitle: '1 분전',
    },
  ];

  const createAlarmInstance = (
    type: 'recruit' | 'accept' | 'reject',
    params: Record<string, string>,
    title: string,
    subtitle: string,
  ) => {
    switch (type) {
      case 'recruit':
        return new ProjectRecruitPropose(params, title, subtitle);
      case 'accept':
      case 'reject':
        if (type === 'accept' || type === 'reject')
          return new ProjectProposeResult(type, title, subtitle);
        return null;
      default:
        return null;
    }
  };
  return (
    <div>
      {mocks.map((v, index) => {
        const ProjectInstance = createAlarmInstance(
          v.type,
          v.params,
          v.title,
          v.subtitle,
        );
        return ProjectInstance ? (
          <Project key={index} project={ProjectInstance} />
        ) : null;
      })}
    </div>
  );
}
