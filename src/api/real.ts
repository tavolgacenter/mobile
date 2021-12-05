import axios from 'axios';
import {BASE_API_URL} from './config';
import type {
  EventResponseDto,
  ExtendedEventResponseDto,
  MarksResponseDto,
  NominationResponseDto,
  SignInRequestDto,
  SignInResponseDto,
  SignUpRequestDto,
  UserResponseDto,
} from './dto';

const events = {
  getList: () =>
    axios
      .get<EventResponseDto[]>(`${BASE_API_URL}/v1/events`)
      .then(x => x.data),
  getDetails: (id: string) =>
    axios
      .get<ExtendedEventResponseDto>(`${BASE_API_URL}/v1/events?id=${id}`)
      .then(x => x.data),
};

const nominations = {
  // getList: async (params: type) => {},
  getById: (id: string) =>
    axios
      .get<NominationResponseDto>(`${BASE_API_URL}/v1/nominations/${id}`)
      .then(x => x.data),
};

const auth = {
  signIn: (data: SignInRequestDto) =>
    axios.post<SignInResponseDto>(`${BASE_API_URL}/v1/auth/login`, data),
  signUp: (data: SignUpRequestDto) =>
    axios.post<UserResponseDto>(`${BASE_API_URL}/v1/users/register`, data),
  getMe: () =>
    axios.get<UserResponseDto>(`${BASE_API_URL}/v1/users/me`).then(x => x.data),
};

const marks = {
  setMark: (criteriaId: string, userId: string, mark: number) =>
    axios.post(
      `${BASE_API_URL}/v1/marks?criteriaId=${criteriaId}&userId=${userId}&mark=${mark}`,
    ),
  getMarks: (usersIds: string[], nominationId: string) =>
    axios
      .get<{[key: string]: MarksResponseDto[]}>(
        `${BASE_API_URL}/v1/marks?${usersIds
          .map(x => `ids=${x}`)
          .join('&')}&nominationId=${nominationId}`,
      )
      .then(x => x.data),
};

export const API = {
  events,
  nominations,
  auth,
  marks,
};
