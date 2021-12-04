import {EventResponseDto} from './dto';

const events = {
  getList: async () =>
    [
      {
        name: 'Хакатон Таволга',
        description:
          'Хакатон по разработке приложения для оценивания конкурсов',
        participantsCount: 10,
      },
      {
        name: 'Хакатон Таволга',
        description:
          'Хакатон по разработке приложения для оценивания конкурсов',
        participantsCount: 3,
      },
    ] as EventResponseDto[],
};

export const API = {
  events,
};
